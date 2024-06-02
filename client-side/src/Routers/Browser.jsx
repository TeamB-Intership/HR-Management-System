import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Login from '../HR/LoginPage/Login';
import Registration from '../HR/RegistrationPage/Registration';
import Sidebar from '../HR/DashBoard/SideBar';
import Dashboard from '../HR/DashBoard/DashBoard';

const Browser = () => {
  return (
    <div>
     <BrowserRouter>
     <Sidebar/>
     <Routes>
       
 <Route path="/" element={<Home/>} />
 <Route path='/dashBoard' element={<Dashboard/>}/>
 <Route path="/login" element={<Login/>} />
 <Route path="/registartion" element={<Registration/>}/>
     </Routes>
     </BrowserRouter>   
    </div>
  )
}

export default Browser