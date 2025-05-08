
import { runQuery } from '../server';

export interface UserAnswer {
    user_id: number,
    quiz_id: number
    answer_id: number
    question_id: number
}
export const InsertUserAnswer = async (payload: UserAnswer): Promise<any> => {
    const query =
        "INSERT INTO user_answers (user_id, quiz_id, question_id, answer_id) VALUES ($1, $2, $3, $4)"


    const res = await runQuery(query, [
        payload.user_id,
        payload.quiz_id,
        payload.question_id,
        payload.answer_id
    ])
}

export const CheckAnswer = async (user_id: number, quiz_id: number): Promise<any> => {
    const query = `SELECT COUNT(*) AS correct_answers
             FROM answers a
             JOIN user_answers ua ON a.id = ua.answer_id
             WHERE ua.user_id = $1 AND ua.quiz_id = $2 AND a.is_correct = TRUE`
    const res = await runQuery(query, [
        user_id,
        quiz_id
    ])
    return res?.rows[0]
}