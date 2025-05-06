import {
  Button,
  Form,
  FormProps,
  Input,
  message,
  Select,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import React from 'react';
import { AcountModel, OPTION_ROLE } from '../../Model/root.model';
import { fetchData } from '../../Hook/useFetch';
import { Dispatch } from '@reduxjs/toolkit';
import { UploadOutlined } from '@ant-design/icons';

const UpdateAccount: React.FC<{
  account: AcountModel;
  onSucces: Function;
  dispatch: Dispatch;
}> = ({ account, onSucces, dispatch }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [banner, setBanner] = React.useState<UploadFile[]>([]);
  const [file, setFile] = React.useState<File>();
  const [fileBanner, setFileBanner] = React.useState<File>();
  const onFinsh: FormProps<AcountModel>['onFinish'] = () => {
    console.log('Success:');
    const value = form.getFieldsValue();
    let formData = new FormData();
    formData.append('idAccount', account.id.toString());
    formData.append('user_name', value.user_name);
    formData.append('full_name', value.full_name);
    formData.append('password', value.password);
    if (file && fileBanner) {
      formData.append('avartar', file);
    } else {
      message.error('Vui lòng chọn một file hợp lệ!');
      return;
    }
    // fetchData();
  };
  const onFinishFailed = () => {
    console.log('Failed:');
  };
  React.useEffect(() => {
    form.setFieldsValue(account);
  }, []);
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
  const beforeUploadBanner = (file: File) => {
    if (banner.length > 0) {
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
      setFileBanner(file);
      setBanner([
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
      <Typography.Text>UserName</Typography.Text>
      <Form.Item<AcountModel>
        name="user_name"
        rules={[{ required: true, message: 'Please input new username!' }]}
      >
        <Input />
      </Form.Item>
      <Typography.Text>FullName</Typography.Text>
      <Form.Item<AcountModel>
        name="full_name"
        rules={[{ required: true, message: 'Please input FullName!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Typography.Text>Password</Typography.Text>
      <Form.Item<AcountModel>
        name="password"
        rules={[{ required: true, message: 'Please input new password!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item<AcountModel>
        name="role"
        rules={[{ required: true, message: 'Please input new password!' }]}
      >
        <Select options={OPTION_ROLE} />
      </Form.Item>
      <Typography.Text>Avartar</Typography.Text>
      <Form.Item<AcountModel>
        name="avartar"
        rules={[{ required: true, message: 'Please input Description!' }]}
      >
        <Upload
          beforeUpload={beforeUpload}
          accept="image/*"
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

export default UpdateAccount;
