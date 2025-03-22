import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    messages: (data: string) => void;
    // Thêm sự kiện joinRoom
    pushMessage: (data: { nameroom: string, idroom: number, }) => void
    joinRoom: (data: { idUser: string, roomId: string }) => void;
    toggleMicInRoom: (data: { idUser: string, isActiveMic: boolean }) => void
    userconnected: (userID: string) => void
    toggleCamera: (userId: string, isOpenCamera: boolean) => void
    shareScreen: (idPeer: string) => void

}

interface ClientToServerEvents {
    message: (data: string, idRoom: number) => void;
    // Thêm sự kiện joinRoom
    joinRoom: (data: { idUser: string, roomId: string }) => void;
    toggleMicInRoom: (data: { idUser: string, isActiveMic: boolean }) => void
    userconnected: (userID: string) => void
    addUser: (data: { idAccount: number, idRoom: number }) => void
    joinRoomChat: (data: { roomId: number }) => void
    toggleCamera: (userId: string, idRoom: number, isOpenCamera: boolean) => void
    shareScreen: (idPeer: string, idRoom: number) => void
}

const useSocket = (namespace: string) => {
    const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>();
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const socket = io(`http://localhost:3001${namespace}`);

        // Lưu socket instance
        socketRef.current = socket;

        // Lắng nghe sự kiện 'connect'
        socket.on("connect", () => {
            setIsConnected(true);
            setError(null);
            console.log("Connected to server:", socket.id);
        });

        // Lắng nghe sự kiện 'connect_error'
        socket.on("connect_error", (err) => {
            setIsConnected(false);
            setError(err.message);
            console.error("Connection error:", err.message);
        });

        // Lắng nghe sự kiện 'disconnect'
        socket.on("disconnect", () => {
            setIsConnected(false);
            console.log("Disconnected from server");
        });

        return () => {
            socket.disconnect();
        };
    }, [namespace]);

    return { socket: socketRef.current || null, isConnected, error };

};

export default useSocket;
