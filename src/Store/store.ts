import { configureStore } from "@reduxjs/toolkit";
import loginStoreReducer from "../Page/Login/store/login.store.reducer";
import roomStoreReducer from "./Room/room.store.reducer";
import layoutStoreReducer from "../Common/Layout/store/layout.store.reducer";
import CourseStoreReducer from "../PageTeacher/CoursesAdmin/store/Course.store.reducer";
import UpdateCourseStoreReducer from "../PageTeacher/UpdateCourse/store/UpdateCourse.store.reducer";
import PlaylistAdminStoreReducer from "../PageTeacher/PlayListCourse/store/PlaylistAdmin.store.reducer";
import QuizzesStoreReducer from "../PageTeacher/Quizzes/store/Quizzes.store.reducer";
import QuestionAdminStoreReducer from "../PageTeacher/Question/store/QuestionAdmin.store.reducer";
import PlaylistStudentStoreReducer from "../Page/PlayListStudent/store/PlaylistStudent.store.reducer";
const store = configureStore({
    reducer: {
        user: loginStoreReducer.reducer,
        room: roomStoreReducer.reducer,
        layout: layoutStoreReducer.reducer,
        courses: CourseStoreReducer.reducer,
        courseUpdate: UpdateCourseStoreReducer.reducer,
        playListAdmin: PlaylistAdminStoreReducer.reducer,
        payListStuden: PlaylistStudentStoreReducer.reducer,
        quizzes: QuizzesStoreReducer.reducer,
        questionAdmin: QuestionAdminStoreReducer.reducer
    },


})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;