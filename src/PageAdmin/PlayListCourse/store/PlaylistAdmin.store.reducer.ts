import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayListItem {
    id: number;
    title: string;
    content: string;
    course_id: number
    video_url: string
    order_index: number
    create_at: string
}
interface PlayListState {
    playList: PlayListItem[];
}
const initialState: PlayListState = {
    playList: []
}
export default createSlice({
    name: "playListAdmin",
    initialState: initialState,
    reducers: {
        setPlayList(state, action: PayloadAction<PlayListItem[]>) {
            state.playList = action.payload;
        },
    }
})