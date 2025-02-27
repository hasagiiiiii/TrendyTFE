import { RootState } from ".././store";

export const getRoom = (state: RootState) => state.room.roomlist

export const getRoomSelect = (state: RootState) => state.room.idRoom