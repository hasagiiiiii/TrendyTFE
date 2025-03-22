import React from 'react';
import { Link } from 'react-router-dom';
import { CiPlay1 } from 'react-icons/ci';
import './index.css';
import { Button } from 'antd';
export interface PlayListItem {
  title: string;
  image: string;
  link: string;
  id: number;
}
const PlayListVideo: React.FC<PlayListItem> = ({ link, image, title, id }) => {
  const hanldeClick = () => {
    document.cookie = `idLesson=${id};path=/`;
  };
  return (
    <Link onClick={() => hanldeClick()} className="box" to={link}>
      <img src={`${process.env.REACT_APP_UPP_LOAD}${image}`} alt="" />
      <div className="play">
        <CiPlay1 size={30} />
      </div>
      <h3>{title}</h3>
    </Link>
  );
};

export default PlayListVideo;
