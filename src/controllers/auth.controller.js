import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../services/mail.service.js";

 async function register(req, res) {

    const { username, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }]
    });

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "user with this email or username already exists",
            success: false,
            err: "User already exists"
        });
    }

    const user = await userModel.create({username,email,password})

    await sendEmail({
        to:email,
        subject: "Welcome to perplexity",
        text: `Hi ${username} \n\n  Thank  you for register at perplexity  ,we re  excited to have on `,
        html:`<p> Hi ${username} </p> <p> thank for register a <strong>perplexity <strong> , we re excited </p>`
        
    })

    res.status(201).json({
        message : "user register succeessfully ",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })

}

export default register