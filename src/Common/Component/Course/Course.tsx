import React from 'react';
import './index.css';
import { Avatar, Card, Rate } from 'antd';
import pic2 from '../../../assets/pic-2.jpg';
import thumb1 from '../../../assets/thumb-1.png';
export interface CourseItem {
  id: number;
  description: number;
  avatar: string;
  user_name: string;
  createAt: string;
  thumbnail: string;
  title: string;
  price: number;
  category: number;
}
const Course: React.FC<{ course: CourseItem }> = ({ course }) => {
  React.useEffect(() => {
    console.log(course);
  }, []);
  return (
    <Card hoverable style={{ width: '100%', position: 'relative' }}>
      <div className="box">
        <div className="tutor">
          <Avatar size={50} src={pic2} />
          <div className="info">
            <h3>{course.user_name}</h3>
            <span>{course.createAt}</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb1} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">{course.title}</h3>
        <a href="playlist.html" className="inline-btn">
          view playlist
        </a>
      </div>
    </Card>
  );
};

export default Course;
