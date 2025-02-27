import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoursesAdmin from '../CoursesAdmin/CoursesAdmin';
import TableCommon from '../../Common/Component/Table/Table';
import { Button } from 'antd';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import AddCourse from '../AddCourse/AddCourse';

const HomeAdmin: React.FC<{}> = () => {
  const hanldeRegister = () => {
    const Course = ModalCommon.Show({
      content: <AddCourse onSucces={() => Course.destroy()} />,
      title: <h1>Add Course</h1>,
      onCancel: () => {},
      afterClose: () => console.log('ket thuyc'),
      width: 700,
    });
  };
  const columns = [
    {
      title: 'Họ',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Tên',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: true,
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age, // ✅ Sắp xếp theo số
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: string[], a: { test: { con: string } }) => (
        <>
          {tags.map((tag) => (
            <span key={tag} style={{ marginRight: 5, color: 'blue' }}>
              {tag + a.test?.con || ''}
            </span>
          ))}
        </>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['developer', 'nice'],
      test: { con: 'téads' },
    },
    {
      key: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      age: 28,
      address: 'London No. 1 Lake Park',
      tags: ['teacher', 'cool'],
      test: { con: 'téads' },
    },
  ];
  return (
    <div>
      <div className="flex"></div>
      <TableCommon height={300} columns={columns} dataSource={data} />
    </div>
  );
};

export default HomeAdmin;
