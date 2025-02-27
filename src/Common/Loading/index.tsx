import { Spin } from 'antd';
import React from 'react';
import { AppContextAPI } from '../../Context/AppContext';

const Loading: React.FC = () => {
  return <Spin fullscreen size="large" />;
};

export default Loading;
