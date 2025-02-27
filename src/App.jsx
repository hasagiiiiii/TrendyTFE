import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutCommon from './Common/Layout';
import AppContext from './Context/AppContext';
import Login from './Page/Login/Login';
import AddRoom from './Page/AddRoom/';
import VideoCall from './Page/VideoCall';
import Chat from './Page/Chat';
import AddUserInRoom from './Page/AddUserInRoom';
import CallVideoContext from './Context/CallVideoContext';
import Home from './Page/Home/Home';
import './App.css';
import NotFound from './Page/NotFound/NotFound';
const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <CallVideoContext>
          <Routes>
            <Route path="/*" element={<LayoutCommon />}></Route>
          </Routes>
        </CallVideoContext>
      </AppContext>
    </BrowserRouter>
  );
};

export default App;
