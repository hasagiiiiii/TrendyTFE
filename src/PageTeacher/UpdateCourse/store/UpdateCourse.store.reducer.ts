import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseItem } from '../../../Common/Component/Course/Course';

interface CourseUpdateModel {
  courseUpdate: CourseItem | any;
  result: number
}
const initialState: CourseUpdateModel = {
  courseUpdate: null,
  result: -1
};
export default createSlice({
  name: 'CourseUpdate',
  initialState: initialState,
  reducers: {
    COURSE_UPDATE(state, action: PayloadAction<any>) {
      console.log(action.payload);
      state.courseUpdate = action.payload.data;
      state.result = action.payload.result
    },
  },
});
