import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { store } from './App'

const Nav = () => {
    const [token,setToken]= useContext(store)
  return (
    <div>
        {!token && 
        <div style={{display: "flex", justifyContent:"space-around", }}>
           <Link to="/register">Register</Link> 
           <Link to="/login">Login</Link> 
        </div>
}
    </div>
  )
}

export default Nav