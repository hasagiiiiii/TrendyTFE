import React from 'react';
import {
  Button,
  Form,
  FormProps,
  Input,
  message,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { LessonItem } from '../../Model/PlayList.model';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const AddPlayList: React.FC<{ idCourse: number; onSucces: Function }> = ({
  idCourse,
  onSucces,
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [file, setFile] = React.useState<File>();

  const onFinsh: FormProps<LessonItem>['onFinish'] = () => {
    console.log('Success:');
    const value = form.getFieldsValue();
    let formData = new FormData();
    formData.append('course_id', idCourse.toString());
    formData.append('title', value.title);
    formData.append('content', value.content);
    if (file) {
      formData.append('video_url', file);
    } else {
      message.error('Vui lòng chọn một file hợp lệ!');
      return;
    }
    axios.post(`http://localhost:3001/course/lesson`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });
  };
  const onFinishFailed = () => {
    console.log('Failed:');
  };

  const beforeUpload = (file: File) => {
    if (fileList.length > 0) {
      message.error('Chỉ được upload tối đa 1 file!');
      return false;
    } else {
      const isImageOrVideo =
        file.type?.startsWith('image/') || file.type?.startsWith('video/');
      if (!isImageOrVideo) {
        message.error('Chỉ được phép upload ảnh hoặc video!');
        return false;
      }
      const preview = URL.createObjectURL(file);
      setFile(file);
      setFileList([
        {
          uid: `${Date.now()}`, // Fix lỗi uid không tồn tại
          name: file.name,
          status: 'done',
          url: preview,
          fileName: file.name,
        },
      ]);
      return isImageOrVideo; // Chỉ cho phép upload nếu là ảnh hoặc video
    }
  };
  const handleCustomRequest = ({ file, onSuccess }: any) => {
    // Giả lập upload thành công sau 1 giây
    setTimeout(() => {
      onSuccess('ok');
      message.success(`${file.name} đã được upload thành công`);
    }, 1000);
  };
  return (
    <Form form={form} onFinish={onFinsh} onFinishFailed={onFinishFailed}>
      <Typography.Text>Title</Typography.Text>
      <Form.Item<LessonItem>
        name="title"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input />
      </Form.Item>
      <Typography.Text>Description</Typography.Text>
      <Form.Item<LessonItem>
        name="content"
        rules={[{ required: true, message: 'Please input Description!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item<LessonItem>
        name="video_url"
        rules={[{ required: true, message: 'Please input Description!' }]}
      >
        <Upload
          beforeUpload={beforeUpload}
          accept="image/*,video/*"
          listType="picture"
          customRequest={handleCustomRequest}
          fileList={fileList as UploadFile[]}
          onRemove={() => setFileList([])} // Xóa file khi bấm remove
        >
          <Button type="primary" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button className="btn" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPlayList;
