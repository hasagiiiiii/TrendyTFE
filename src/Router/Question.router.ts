import express, { Request, Response } from "express";
import { AuthRequest } from "../MiddleWare/auth.middleware";
import { GetQuestion, InsertQuestion } from "../Controller/Question.controller";
import { getAnserByID, insertAnswer } from "../Controller/Answer.controller";
export const QuestionRouter = express.Router();

QuestionRouter.post('/questionByID', async (req: AuthRequest, res: Response): Promise<any> => {
    const { quiz_id, text, type, answer } = req.body.datares;
    try {
        const questionResult = await InsertQuestion({ quiz_id: quiz_id, question_text: text, question_type: type })
        const question_id = questionResult.id;

        for (const item of answer) {
            await insertAnswer({ question_id: question_id, answer_text: item.text, is_correct: item.is_correct })
        }

        res.status(201).json({
            message: "Question added successfully",
            data: [],
            result: 0
            // question_id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})
QuestionRouter.post('/getQuestion', async (req: AuthRequest, res: Response) => {
    const { id_quizze } = req.body

    try {
        const questions = await GetQuestion(id_quizze)
        for (let question of questions) {
            const answer = await getAnserByID(question.id)
            question.answer = answer
        }
        res.status(200).json({ message: 'Thành công', result: 0, data: questions })
    } catch (error) {
        res.status(500).json({ message: 'Thành công', result: 1, data: [] })
    }
})