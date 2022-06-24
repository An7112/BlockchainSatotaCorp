import React from 'react';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPopup from './components/AccountPopup/AccountPopup';
import Notifications from './components/Notifications/Notifications';
import Referrals from './components/Referrals/Referrals';
import Settings from './components/Settingss/Settings';


import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AccountPopup' element={<AccountPopup />}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
        <Route path='/Notifications' element={<Notifications />} ></Route>
        <Route path='/Referrals' element={<Referrals />} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
