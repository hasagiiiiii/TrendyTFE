import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseItem } from "../../../Common/Component/Course/Course";
export interface CoursePayload {
    id: number,
    title: string,
    description: string
    teacher_id: number,
    price: number,
    thumbnail: string,
    createAt: Date,
    category: number
}
interface Course {
    courses: CourseItem[],
}
const initialState: Course = {
    courses: [],
}
export default createSlice({
    name: "course",
    initialState: initialState,
    reducers: {
        setCourse(state, action: PayloadAction<CourseItem[]>) {
            state.courses = action.payload
        },
        insertCourse(state, action: PayloadAction<CourseItem>) {
            state.courses = [...state.courses, action.payload]
        },
        updateCoure(state, action: PayloadAction<CourseItem>) {
            console.log('action.payload', action.payload);
            state.courses = state.courses.map((course) => course.id === action.payload.id ?
                action.payload : course)
        },
        deleteCourse(state, action: PayloadAction<number>) {
            state.courses = state.courses.filter((course) => course.id !== action.payload)
        }
    }
});