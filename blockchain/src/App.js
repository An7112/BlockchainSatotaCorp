import React from 'react';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPopup from './components/AccountPopup/AccountPopup';
import Notification from './components/Notification/Notification';



import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AccountPopup' element={<AccountPopup />}></Route>
        <Route path='/Notification' element={<Notification />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
