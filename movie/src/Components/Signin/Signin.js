import React,{useState} from 'react'
import style from "./Signin.module.css"
import Inputform from '../Input/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
export default function Signin() {
  const [value,setValue] = useState({
    
    email:"",
    password:"",
  })

  const [errMsg,setErrMsg] = useState("");
  const navigate = useNavigate()
  const handleSubmission =()=>{
    if( !value.email || !value.password){
      setErrMsg("Please Fill All Feilds");
      return
    }
    setErrMsg("");
    signInWithEmailAndPassword(auth,value.email,value.password)
    .then((response)=>{
       const user = response.user;
       console.log(user)
       navigate("/")
    })
  }
  return (
    <div className={style.container}>
       <div className={style.innerBox}>
        <h1>SignIn Page</h1>
        
        <Inputform label="Email: " type="email" placeholder="Enter Your Email"
        onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))}/>
        <Inputform label="Password: " type="password" placeholder="Enter Your Password"
        onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))}/>
        <div className={style.footer}>
          <b>{errMsg}</b>
          <button className={style.btn} onClick={handleSubmission}>SignIn</button>
          <div className={style.linkContainer}>
            <p>Already have an account?</p>
            <span>
              <Link to="/signup">SignUp</Link>
            </span>
          </div>
        </div>
       </div>
    </div>
  )
}
