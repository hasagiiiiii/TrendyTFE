import React from 'react';
import Course from '../../Common/Component/Course/Course';
import { Alert, Col, Flex, MenuProps, Row } from 'antd';
import './Home.css';
import { Route, Routes } from 'react-router-dom';
import Courses from '../Courses/Courses';
const Home: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
    </Routes>
  );
};

export default Home;
