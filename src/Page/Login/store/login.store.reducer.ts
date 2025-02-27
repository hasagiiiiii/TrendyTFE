import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserLogin {
    result: number,
    data: any
}
const initialState: UserLogin = {
    result: 0,
    data: []
}
export default createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<UserLogin>) => {
            return { ...state, data: action.payload.data, result: action.payload.result }
        },
        logout: (state) => {
            return initialState;
        }
    }
})