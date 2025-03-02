import { configureStore } from "@reduxjs/toolkit";
import loginStoreReducer from "../Page/Login/store/login.store.reducer";
import roomStoreReducer from "./Room/room.store.reducer";
import createSagaMiddleware from "redux-saga";
import layoutStoreReducer from "../Common/Layout/store/layout.store.reducer";
import { rootSaga } from "./saga";
import CourseStoreReducer from "../PageAdmin/CoursesAdmin/store/Course.store.reducer";
import UpdateCourseStoreReducer from "../PageAdmin/UpdateCourse/store/UpdateCourse.store.reducer";
import PlaylistAdminStoreReducer from "../PageAdmin/PlayListCourse/store/PlaylistAdmin.store.reducer";
const sagamiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user: loginStoreReducer.reducer,
        room: roomStoreReducer.reducer,
        layout: layoutStoreReducer.reducer,
        courses: CourseStoreReducer.reducer,
        courseUpdate: UpdateCourseStoreReducer.reducer,
        playListAdmin: PlaylistAdminStoreReducer.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({ thunk: false }).concat(sagamiddleware)
    }

})
sagamiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;