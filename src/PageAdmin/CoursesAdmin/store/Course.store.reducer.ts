import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CoursePayload {
    title: string,
    description: string
    teacher_id: number,
    price: number,
    thumbnail: string,
    createAt: Date,
    category: number
}
interface Course {
    courses: CoursePayload[],
}
const initialState: Course = {
    courses: [],
}
export default createSlice({
    name: "room",
    initialState: initialState,
    reducers: {
        setCourse(state, action: PayloadAction<CoursePayload[]>) {
            state.courses = action.payload
        },
        insertCourse(state, action: PayloadAction<CoursePayload>) {
            state.courses = [...state.courses, action.payload]
        }

    }
});