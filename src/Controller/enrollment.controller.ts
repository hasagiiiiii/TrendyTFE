import { runQuery } from "../server"

export const JoinCourse = async (id_user: number, course_id: number): Promise<any> => {
    const query = `
       Insert into enrollments(course_id,user_id) values ($1,$2)
    `
    const res = await runQuery(query, [course_id, id_user])
    return res?.rows[0]
}
export const UpdateCourse = async (id_user: number, course_id: number): Promise<any> => {
    const query = `
       Insert into enrollments(course_id,user_id) values ($1,$2)
    `
    const res = await runQuery(query, [id_user])
    return res?.rows[0]
}

export const getUserJoin = async (course_id: number): Promise<any> => {
    const query = `
       select * from enrollments where course_id = $1
    `
    const res = await runQuery(query, [course_id])
    return res?.rows[0]
}