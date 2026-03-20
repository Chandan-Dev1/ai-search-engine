import { Router } from "express"
import { SendMessage } from "../controllers/chat.controller.js"
import { authUser } from "../middleware/auth.middleware.js"




const chatRoutes = Router()

chatRoutes.post("/message",authUser,SendMessage)

export default chatRoutes