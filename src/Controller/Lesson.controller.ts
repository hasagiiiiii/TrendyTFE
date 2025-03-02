import { LessonItem, LessonItemUpdate } from "../Model/Lesson.model"
import { runQuery } from "../server"

export const GetAllLesson = async (id_user: number): Promise<any> => {
    const query = `
        Select * from tokenauthent where id_user = $1
    `
    const res = await runQuery(query, [id_user])
    return res?.rows[0]
}

export const GetLessonById = async (id_course: number): Promise<LessonItem[]> => {
    const query = `
    Select * from lessons where course_id = $1
    `
    const res = await runQuery(query, [id_course])
    return res?.rows as LessonItem[]
}
export const InsertLessonByIdCourse = async (lesson: LessonItemUpdate) => {
    const query = `Insert into lessons(title,course_id,video_url,"content",order_index) values ($1,$2,$3,$4,$5)
`
    const res = await runQuery(query, [lesson.title, lesson.course_id, lesson.video_url, lesson.content, lesson.order_index])
    return res
}