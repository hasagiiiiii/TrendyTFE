import { Button, Form, FormProps, Input, Modal } from 'antd';
import React from 'react';
import { AddRoomModel } from './store/addRoom.model';
import { AppContextAPI } from '../../Context/AppContext';
import { AddRoomService } from './store/addRoom.store.service';

const AddRoom = () => {
  const [form] = Form.useForm();
  const context = React.useContext(AppContextAPI);

  const onFinish: FormProps<AddRoomModel>['onFinish'] = (values) => {
    const value = form.getFieldsValue();
    AddRoomService(value);
    const interval = setTimeout(() => {
      context.setSpin(false);
    }, 1000);
    window.location.reload();
    return () => clearTimeout(interval);
  };
  const onFinishFailed: FormProps<AddRoomModel>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  const handleCancel = (): void => {
    form.resetFields();
  };
  return (
    <Modal width={700} onCancel={handleCancel} footer={null}>
      <h1>Create Room</h1>
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
        <Form.Item<AddRoomModel>
          label="Tên phòng"
          name="nameroom"
          rules={[{ required: true, message: 'Please input your Name Room!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<AddRoomModel>
          label="Mã phòng"
          name="code"
          rules={[{ required: true, message: 'Please input your Code!' }]}
        >
          <Input.Password />
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

export default AddRoom;
