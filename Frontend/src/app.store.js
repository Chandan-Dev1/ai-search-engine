import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/features/auth/auth.slice.js"
import chatReducer  from "../src/features/chat/chat.slice.js"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        auth:chatReducer
    }
})