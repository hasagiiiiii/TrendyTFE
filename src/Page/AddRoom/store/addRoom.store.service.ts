import { AddRoomModel } from "./addRoom.model"
function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Tháng bắt đầu từ 0, cộng thêm 1
    const day = String(date.getDate()).padStart(2, '0');          // Đảm bảo là 2 chữ số

    return `${year}/${month}/${day}`;
}
export const AddRoomService = async (room: AddRoomModel) => {
    const creatAt = formatDate(new Date())
    const response = await fetch('http://localhost:3001/api/createRoom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            nameroom: room.nameroom,
            code: room.code,
            createat: creatAt
        })
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error))
    return response

}

export const GetRoomOfUser = async () => {
    const response = await fetch('http://localhost:3001/api/getRoom', {
        method: 'GET',
        credentials: 'include',
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error))
    return response

}