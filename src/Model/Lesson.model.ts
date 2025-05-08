export interface LessonItem {
    id: number,
    course_id: number,
    title: string
    video_url: string
    content: string
    order_index: number
    create_at: Date
}

export interface LessonItemUpdate {
    title: string
    content: string
    course_id: number
    video_url: string
    order_index: number
    banner: string
}