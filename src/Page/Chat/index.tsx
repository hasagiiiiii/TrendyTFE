import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Flex,
  Form,
  FormProps,
  Input,
  InputRef,
  Typography,
} from 'antd';
import './index.css';
import { useSelector } from 'react-redux';
import { getRoomSelect } from '../../Store/Room/room.store.selector';
import useSocket from '../../Hook/useSocket';
import { io, Socket } from 'socket.io-client';
import getCookie from '../../Common/Function/Cookie';

interface Message {
  message: string;
  idaccount: number;
  createat: string;
  fullname: string;
}

const Chat: React.FC = () => {
  const idRoom = useSelector(getRoomSelect);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [form] = Form.useForm();
  const idAccount = getCookie('id');
  const inputMessageRef = React.useRef<InputRef | null>(null);
  const messageRef = React.useRef<HTMLDivElement | null>(null);
  console.log('message', messages);
  useEffect(() => {
    const newSocket = io('http://localhost:3001/', {
      // connect to socket Server
      transports: ['websocket'],
    });
    setSocket(newSocket);
    newSocket.on('connect', () => {
      console.log('Socket connected:', newSocket.id); // Xác nhận kết nối thành công
      newSocket?.on('messages', (data) => {
        console.log(data);
        if (data.idroom === idRoom) {
          setMessages((pre) => [...pre, data]);
        }
        // messages.push(data);
      });
    });
    try {
      fetch(`http://localhost:3001/api/getMessage?id=${idRoom}`, {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages(data);
        })
        .catch((error) => console.error('Error:', error));
    } catch (error) {
      console.log(error);
    }

    return () => {
      newSocket.disconnect();
    };
  }, [idRoom]);
  useEffect(() => {
    if (messageRef?.current) {
      setTimeout(() => {
        messageRef.current!.scrollTop = messageRef.current!.scrollHeight;
      }, 10);
    }
  }, [messages]);
  const onFinish: FormProps<{ message: string }>['onFinish'] = () => {
    const value = form.getFieldsValue();
    socket?.emit('message', value.message, idRoom, idAccount, new Date());
    form.resetFields();
    if (inputMessageRef?.current) {
      setTimeout(() => {
        inputMessageRef.current?.focus();
      });
    }
  };
  return (
    <div
      className="chat"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflow: 'auto',
        height: '670px',
      }}
      ref={messageRef}
    >
      {messages?.map((mess, index) => (
        <div
          key={index}
          className={`message ${mess.idaccount === parseInt(idAccount || '') ? 'odd' : 'even'}`}
        >
          <div>
            <Avatar style={{ backgroundColor: '#1677ff' }} size="large">
              {mess.fullname[0].toLocaleUpperCase()}
            </Avatar>
          </div>
          <div>
            <Typography.Title level={2} className="content">
              {mess.message}
            </Typography.Title>
          </div>
        </div>
      ))}
      <div className="input">
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="message">
            <Input
              ref={inputMessageRef}
              size="large"
              placeholder="Nhập tin nhắn"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
