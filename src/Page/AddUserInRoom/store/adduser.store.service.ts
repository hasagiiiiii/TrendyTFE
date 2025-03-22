import { AddUserModel } from "./store.model"

export const AddUserInRoomService = async (room: AddUserModel) => {
    const response = await fetch('http://localhost:3001/api/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            idAccount: room.idAccount,
            idRoom: room.idRoom,
            isAdmin: false
        })
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error))
    return response

}