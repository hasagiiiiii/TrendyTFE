import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { AddUserInRoomModel } from './store/store.model';
import { FormProps } from 'antd';
import { AppContextAPI } from '../../Context/AppContext';
import { useSelector } from 'react-redux';
import { getRoom } from '../../Store/Room/room.store.selector';
import { AddUserInRoomService } from './store/adduser.store.service';
import useSocket from '../../Hook/useSocket';
import { io, Socket } from 'socket.io-client';

interface UserSearch {
  id: number;
  fullname: string;
}
interface RoomSeach {
  idroom: number;
  nameroom: string;
}
const AddUserInRoom: React.FC = () => {
  const [form] = Form.useForm();
  const context = useContext(AppContextAPI);
  const [listAccount, setListRoom] = useState<UserSearch[]>([]);
  const roomList: RoomSeach[] = useSelector(getRoom);
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const newSocket = io('http://localhost:3001/', {
      // connect to socket Server
      transports: ['websocket'],
    });
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Socket connected:', newSocket.id); // Xác nhận kết nối thành công
    });

    newSocket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    try {
      fetch('http://localhost:3001/api/getAllUser', {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length) {
            setListRoom(data);
          }
        })
        .catch((error) => console.error('Error:', error));
    } catch (error) {
      console.log(error);
    }
    return () => {
      newSocket.disconnect(); // Đảm bảo ngắt kết nối khi component unmount
    };
  }, []);
  const onFinish: FormProps<AddUserInRoomModel>['onFinish'] = (values) => {
    const value = form.getFieldsValue();
    // AddUserInRoomService(value);
    console.log(socket);
    socket?.emit('addUser', { ...value, isAdmin: false });
    context.setAActiveAddUserModal(false);
    form.resetFields();
    context.setSpin(true);
    const interval = setTimeout(() => {
      context.setSpin(false);
    }, 1000);
    window.location.reload();
    return () => clearTimeout(interval);
  };
  const onFinishFailed: FormProps<AddUserInRoomModel>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  const handleCancel = (): void => {
    context?.setAActiveAddUserModal(false);
    form.resetFields();
  };
  return (
    <Modal
      width={700}
      open={context.activeAddUserModal}
      onCancel={handleCancel}
      footer={null}
    >
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item<AddUserInRoomModel>
          label="Account"
          name="idAccount"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select
            size={'small'}
            placeholder="Please select"
            style={{ width: '100%' }}
            options={listAccount?.map((acc) => {
              return { value: acc.id, label: acc.fullname };
            })}
          />
        </Form.Item>

        <Form.Item<AddUserInRoomModel>
          label="Password"
          name="idRoom"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Select
            size={'small'}
            placeholder="Please select"
            style={{ width: '100%' }}
            options={roomList?.map((acc) => {
              return { value: acc.idroom, label: acc.nameroom };
            })}
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserInRoom;
