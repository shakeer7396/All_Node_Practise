import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './Myprofile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path ='/register' element={<Register />} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/myprofile' element={<Myprofile />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App