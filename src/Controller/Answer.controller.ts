import { runQuery } from "../server"
export interface Answer {
    question_id: number
    answer_text: string
    is_correct: boolean
}
export const insertAnswer = async (payload: Answer) => {
    const query = "INSERT INTO answers (question_id, answer_text, is_correct) VALUES ($1, $2, $3)"
    const res = await runQuery(query, [
        payload.question_id,
        payload.answer_text,
        payload.is_correct
    ])
    return res?.rows
}
export const getAnserByID = async (questionId: number) => {
    const query = `
        select id, answer_text from answers WHERE question_id = $1
        `
    const res = await runQuery(query, [
        questionId
    ])
    return res?.rows
}