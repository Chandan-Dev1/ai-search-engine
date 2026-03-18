import { Router } from "express";
import { register, verifyEmail,login,getMe } from "../controllers/auth.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRoutes = Router();

authRoutes.post('/register',register)
authRoutes.get('/verify-email',verifyEmail)
authRoutes.post("/login",login)
authRoutes.get("/get-me",authUser,getMe)


export default authRoutes