import React from 'react';
import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { LoginModel } from '../../../Page/Login/store/login.component';
import { fetchData } from '../../../Hook/useFetch';
const Test = () => {
  const [count, setCount] = React.useState(1);
  const praram = new URLSearchParams(window.location.search);
  const [form] = Form.useForm();
  const hanldeTest = () => {
    (window as any).retrunValue = count;
    window.close();
  };
  React.useEffect(() => {
    console.log(!praram.get('isOpem'));

    if (!praram.get('isOpem')) {
      window.close();
      window.location.href = '/';
    }
  }, []);

  const onFinish: FormProps<LoginModel>['onFinish'] = () => {
    const value = form.getFieldsValue();
    console.log(value);
    fetchData(`${process.env.REACT_APP_URL_API}auth/login`, 'POST', {
      ...value,
    });
    // hanldeTest();
  };
  const onFinishFailed: FormProps<LoginModel>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
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
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox defaultChecked={false}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Test;
