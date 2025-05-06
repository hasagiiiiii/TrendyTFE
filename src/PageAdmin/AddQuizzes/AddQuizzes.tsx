import { Button, Form, FormProps, Input, Typography } from 'antd';
import React from 'react';
import { fetchData } from '../../Hook/useFetch';
export interface Quizzes {
  title: string;
  description: string;
}
const AddQuizzes: React.FC<{
  idCourse: number;
  onSucces: Function;
}> = ({ idCourse, onSucces }) => {
  const [form] = Form.useForm();
  const onFinsh: FormProps<Quizzes>['onFinish'] = () => {
    const value = form.getFieldsValue();
    const data = { ...value, idCourse };
    fetchData(`${process.env.REACT_APP_URL_API}quizzesIn`, 'POST', {
      data,
    }).then((data) => {
      if (data.result == 0) {
      }
    });
  };
  return (
    <Form form={form} onFinish={onFinsh}>
      <Typography.Text>Title</Typography.Text>
      <Form.Item<Quizzes>
        name="title"
        rules={[{ required: true, message: 'Please input Tittle!' }]}
      >
        <Input />
      </Form.Item>
      <Typography.Text>Description</Typography.Text>
      <Form.Item<Quizzes>
        name="description"
        rules={[{ required: true, message: 'Please input Description!' }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" className="btn">
        Submit
      </Button>
    </Form>
  );
};

export default AddQuizzes;
