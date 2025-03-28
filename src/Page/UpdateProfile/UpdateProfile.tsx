import {
  Button,
  Form,
  Input,
  Typography,
  Upload,
  message,
  Row,
  Col,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { fetchData } from '../../Hook/useFetch';

interface UpdateProfileProps {
  onSuccess?: () => void;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [preview, setPreview] = useState<string | null>(null);

  const onFinish = async (values: any) => {
    const formData = {
      ...values,
      avatar: preview ? preview : '', //Gửi Base 64
    };
    console.log('Updated Profile:', formData);

    try {
      // Chờ fix user
      const response = await fetchData(
        `${process.env.REACT_APP_URL_API}profile/update/${4}`,
        'POST',
        formData
      );
      console.log('Cập nhật thành công:', response);

      onSuccess?.(); // Gọi hàm đóng
    } catch (error) {
      console.error('Lỗi khi cập nhật hồ sơ:', error);
    }
  };

  const handleUpload = ({ file, fileList }: any) => {
    if (file.status === 'removed') {
      setFileList([]);
      setPreview(null);
    } else {
      setFileList([file]); // Chỉ cho phép 1 file
      const reader = new FileReader(); // Đọc file
      reader.onload = () => setPreview(reader.result as string);  // Lưu ảnh dưới dạng Base64
      reader.readAsDataURL(file.originFileObj); // Đọc ảnh và convert thành Base64
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: 'auto',
        background: '#fff',
        borderRadius: '8px',
      }}
    >
      {/* <Typography.Title level={3} style={{ textAlign: 'center' }}>
        Cập nhật hồ sơ
      </Typography.Title> */}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ userName: '', address: '', fullName: '' }}
        style={{ marginTop: '20px' }}
      >
        <Row gutter={16}>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={(file) => {
                const isImage = file.type.startsWith('image/');
                if (!isImage) {
                  message.error('Chỉ được chọn ảnh!');
                }
                return isImage || Upload.LIST_IGNORE;
              }}
              fileList={fileList}
              onChange={handleUpload}
              onRemove={() => setFileList([])}
              showUploadList={false}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="avatar"
                  style={{
                    width: '100%',
                    maxWidth: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              )}
            </Upload>
          </Col>

          {/* Cột bên phải: Form nhập liệu */}
          <Col span={16}>
            <Form.Item
              label="UserName"
              name="userName"
              rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="FullName"
              name="fullName"
              rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Nút Lưu */}
        <Form.Item style={{ textAlign: 'end' }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProfile;
