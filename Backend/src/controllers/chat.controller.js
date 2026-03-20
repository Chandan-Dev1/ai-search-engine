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
    console.log(messages)

    // res.status(201).json({
    //     response: result,
    //     title,
    //     chat,
    //     aiMessage
    // })

}