import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutCommon from './Common/Layout';
import AppContext from './Context/AppContext';
import CallVideoContext from './Context/CallVideoContext';
import './App.css';
import NotFound from './Page/NotFound/NotFound';
import UpdateCourse from './PageAdmin/UpdateCourse/UpdateCourse';
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
