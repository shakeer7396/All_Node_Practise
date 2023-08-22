import React,{useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [data,setData] = useState({
        
        email:"",
        password:"",
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:5000/login",data).then(
            res => alert(res.data)
        )
    }
  return (
    <div>
        <center>
        <form onSubmit={submitHandler} >
            <h3>Login Page</h3>
            <input type="text" onChange={changeHandler} name="email" placeholder='Email' /> <br/>
            <input type="password" onChange={changeHandler} name="password" placeholder='Password'  /> <br/>
            <input type="submit" value="Login" />
        </form>
        </center>
    </div>
  )
}

export default Login