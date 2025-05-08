import express, { Response } from "express";
import { AuthRequest } from "../MiddleWare/auth.middleware";
export const LessonRouter = express.Router();


LessonRouter.get('quizzes', async (req:AuthRequest,res:Response)=>{
    
})