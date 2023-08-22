import React,{useState,useContext,useEffect} from 'react'
import { store } from './App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Myprofile = () => {
    const navigate =useNavigate()
    const [data,setData] =useState(null);
    const [token,setToken]=useContext(store);
    useEffect(()=>{
        axios.get("http://localhost:5000/myprofile",{
            headers:{
                'x-token': token
            }
        }).then(res => setData(res.data)).catch((err)=> console.log(err))
    },[])
    if(!token){
        return navigate('/login')
    }
  return (
    <div>
    {
        data && 
         <center>
         <h1>Welcome User : {data.username}</h1>
        <button onClick={()=>setToken(null)}>Logout</button>
     </center>
    }
    </div>
  )
}

export default Myprofile