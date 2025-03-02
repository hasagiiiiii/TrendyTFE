import { Alert, Button, Col, Flex, Row } from 'antd';
import React from 'react';
import Course, { CourseItem } from '../../Common/Component/Course/Course';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import AddCourse from '../../PageAdmin/AddCourse/AddCourse';
import axios from 'axios';
const Courses = () => {
  const [courses, setCourses] = React.useState<CourseItem[]>([]);

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
      <div className="flex" style={{ padding: '10px' }}>
        <Button style={{ width: '200px', padding: '20px' }} className="btn">
          Register
        </Button>
        <Button style={{ width: '200px', padding: '20px' }} className="btn">
          Update
        </Button>
      </div>
      <Flex wrap="wrap" gap={20}>
        {courses.map((item) => {
          return (
            <Col key={item.id}>
              <Course course={item} />
            </Col>
          );
        })}
      </Flex>
    </div>
  );
};
export default Courses;
