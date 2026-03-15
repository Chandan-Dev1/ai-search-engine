import { Router } from "express";
import { register, verifyEmail,login } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post('/register',register)
authRoutes.get('/verify-email',verifyEmail)
authRoutes.post("/login",login)


export default authRoutes