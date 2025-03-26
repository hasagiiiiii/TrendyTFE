import { Button, Checkbox, Form, FormProps, Input, Typography } from 'antd';
import { AppContextAPI } from '../../Context/AppContext';
import React from 'react';
import Banner from '../../assets/contact-img.svg';
import { LoginModel } from './store/login.component';
import './index.css';
import { LoginService } from './store/login.model.service';
const Login: React.FC<{
  onSucces: Function;
  setSpin: React.Dispatch<React.SetStateAction<boolean>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}> = ({ onSucces, setSpin, setLogin, setUser }) => {
  const [form] = Form.useForm();
  const onFinish: FormProps<LoginModel>['onFinish'] = () => {
    const value = form.getFieldsValue();
    LoginService(value).then((data) => {
      document.cookie = `user = ${JSON.stringify(data.data)};path=/`;
      // localStorage.setItem('user', JSON.stringify(data.data));
      setUser(data.data.user);
    });
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 1000);
    setLogin(true);
    onSucces();
  };
  const onFinishFailed: FormProps<LoginModel>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      className="flex"
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="banner">
        <img src={Banner} width={400} height={400} />
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
        style={{ width: '500px' }}
      >
        <Typography.Paragraph style={{ marginBottom: '10px' }}>
          Username
        </Typography.Paragraph>
        <Form.Item<LoginModel>
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Typography.Paragraph style={{ marginBottom: '10px' }}>
          Password
        </Typography.Paragraph>
        <Form.Item<LoginModel>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<LoginModel> name="remember" valuePropName="checked">
          <Checkbox defaultChecked={false}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button className="btn" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
