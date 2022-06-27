import React from 'react';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPopup from './components/AccountPopup/AccountPopup';



import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AccountPopup' element={<AccountPopup />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
