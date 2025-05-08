import { QuizzesItem } from "../Model/Quizzes"
import { runQuery } from "../server"

export const InsertQuizzes = async (payload: QuizzesItem) => {
    const query = 'Insert into quizzes(course_id,title,description) values($1,$2,$3) RETURNING *'
    const res = await runQuery(query, [
        payload.idCourse,
        payload.title,
        payload.description
    ])
    return res?.rows[0]
}
export const UpdateQuizzes = async (title: string, descripion: string, id_quizzes: number) => {
    const query = `
           UPDATE quizzes SET title = $1,description =$2 Where id = $3 RETURNING *;
        `;
    const res = await runQuery(query, [
        title,
        descripion,
        id_quizzes
    ]);
    return res?.rows[0];
}
export const getQuizzes = async (idCourse: number, id_quizze: number) => {
    const query = 'SELECT * FROM quizzes WHERE id = $1 AND course_id =$2'
    const res = await runQuery(query, [
        id_quizze,
        idCourse
    ])
    return res?.rows
}
export const getQuizzesAll = async (idCourse: number) => {
    const query = 'SELECT * FROM quizzes WHERE course_id =$1 ORDER BY id ASC'
    const res = await runQuery(query, [
        idCourse
    ])
    return res?.rows
}

 
export const getQuizzesStudent = async (idCourse: number) => {
    const query = 'SELECT * FROM quizzes WHERE course_id =$1 ORDER BY id ASC'
    const res = await runQuery(query, [
        idCourse
    ])
    return res?.rows
}

