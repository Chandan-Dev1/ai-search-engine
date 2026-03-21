import { Router } from "express"
import { SendMessage,getChats,getMessage ,deletechat} from "../controllers/chat.controller.js"
import { authUser } from "../middleware/auth.middleware.js"




const chatRoutes = Router()

chatRoutes.post("/message",authUser,SendMessage)
chatRoutes.get("/",authUser,getChats)
chatRoutes.get("/:chatId/mmessages",authUser,getMessage)
chatRoutes.delete("/delete/:chatId",authUser,deletechat)
export default chatRoutes