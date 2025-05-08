import { runQuery } from "../server";

export const InsertResult = async (user_id: number, quiz_id: number, score: number) => {
    const query = `INSERT INTO user_quiz_results (user_id, quiz_id, score) 
             VALUES ($1, $2, $3) 
             ON CONFLICT (user_id, quiz_id) DO UPDATE SET score = $3, completed_at = NOW()`;
    const res = await runQuery(query, [user_id, quiz_id, score]);

    return res?.rows[0];

};