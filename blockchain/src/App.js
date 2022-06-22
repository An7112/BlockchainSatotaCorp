
import './App.css';
import Account_popup from './components/AccountPopup/Account_popup';
import Notifications from './components/Notifications/Notifications';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Account_popup/>}></Route>
      <Route path='/Notifications' element={<Notifications/>} ></Route>

     </Routes>
    </BrowserRouter>
     

    
  );
}

export default App;
