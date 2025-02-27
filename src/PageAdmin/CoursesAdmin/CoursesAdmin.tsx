import React from 'react';
import Course, { CourseItem } from '../../Common/Component/Course/Course';
import './index.css';
import axios from 'axios';
import { Button, Col, Flex, TableProps } from 'antd';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import AddCourse from '../AddCourse/AddCourse';
import TableCommon from '../../Common/Component/Table/Table';
const columns = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id, // ✅ Sắp xếp theo số
  },
  {
    title: 'thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    render: (img: string) => {
      return <img src={`http://localhost:3001/uploads/${img}`} alt="icon" />;
    },
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'created_at',
    dataIndex: 'created_at',
    key: 'created_at',
  },
];

const CoursesAdmin = () => {
  const [courses, setCourses] = React.useState<CourseItem[]>([]);
  const SelectionRow = (col: any) => {
    console.log(col);
  };
  const hanldeRegister = () => {
    const Course = ModalCommon.Show({
      content: <AddCourse onSucces={() => Course.destroy()} />,
      title: <h1>Add Course</h1>,
      onCancel: () => {},
      afterClose: () => console.log('ket thuyc'),
      width: 700,
    });
  };
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}course`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((data) => setCourses(data.data.data));
  }, []);
  console.log(courses);
  return (
    <div>
      <h1>Our Courses</h1>
      <TableCommon columns={columns} dataSource={courses} />
    </div>
  );
};

export default CoursesAdmin;
