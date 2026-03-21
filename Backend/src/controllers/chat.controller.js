import { response } from "express";
import { generateResponse, generateChatTitle } from "../services/ai.service.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";

export async function SendMessage(req, res) {
    const { message, chat: chatId } = req.body;


    const result = await generateResponse(message);

    let title =null;
    let chat = null;

    if (!chatId) {
        const title = await generateChatTitle(message)
        const chat = await chatModel.create({
            user: req.user.id,
            title
        })

    }
     const messages = await messageModel.find({chat:chatId})

    const aiMessage = await messageModel.create({
        chat:chatId || chat._id,
        content: result,
        role: "ai"
    })

    res.status(201).json({
        response: result,
        title,
        chat,
        aiMessage
    })

}

export async function getChats(req,res) {
    const user = req.user

    const chats = await chatModel.find({user:user.id})
    res.status(200).json({
        message:"chat retrieved successfully",
        chats
    })
}

export async function getMessage(req,res) {
    
    const {chatId}=req.params

    const chat = await chatModel.find({
        _id:chatId,
        user:req.user.id
    })
    if(!chat){
        return res.status(404).json({
            message: "chat not found "
        })
    }

    const messages =await messageModel.find({chat:chatId})
    res.status(200).json({
        message:"message retrieved successfulyy",
        message
    })
}

export async function deletechat(req,res) {
    const {chatId}= req.params

    const chat = await chatModel.findOneAndDelete({
        id:chatId,
        user:req.user.id
    })

    await messageModel.deleteMany({
        chat:chatId
    })

    if(!chat){
        return res.status(404).json({
            message:"chat not found"
        })
    }
    res.status(200).json({
        message:"chat deleted successfully.....?"
    })
}