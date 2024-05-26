import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Login from './Login';

const Browser = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       
 <Route path="/" element={<Home/>} />
 <Route path="/login" element={<Login/>} />
     </Routes>
     </BrowserRouter>   
    </div>
  )
}

export default Browser