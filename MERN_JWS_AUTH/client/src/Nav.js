import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div style={{display: "flex", justifyContent:"space-around", }}>
           <Link to="/register">Register</Link> 
           <Link to="/login">Login</Link> 

        </div>
    </div>
  )
}

export default Nav