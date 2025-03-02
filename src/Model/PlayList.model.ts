export interface LessonItem {
    id: number
    course_id: number
    title: string
    video_url: string,
    content: string
    order_index: number,
    create_at: Date
}
export interface LessonItemInsert {
    course_id: number
    title: string
    video_url: string,
    content: string
    order_index: number,
}
