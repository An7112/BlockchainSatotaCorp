import React from "react";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Pay from "./page/Pay";
import Swap from "./page/Swap";
import Vault from "./page/Vault";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Pay" element={<Pay />}></Route>
        <Route path='/Vaults' element={<Vault/>}></Route>
      <Route path='/Swap' element={<Swap/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
