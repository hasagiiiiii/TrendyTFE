import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface RoomList {
    roomlist: [],
    idRoom: number | 0
}
const initialState: RoomList = {
    roomlist: [],
    idRoom: 0
}
export default createSlice({
    name: "room",
    initialState: initialState,
    reducers: {
        getRoom(state, action: PayloadAction<[]>) {
            state.roomlist = action.payload
        },
        addRoom(state, action: PayloadAction<number>) {
            state.idRoom = action.payload
        }

    }
});