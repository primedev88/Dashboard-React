/* eslint-disable react/no-unescaped-entities */
import './Login.css'
import infinity from "./infinity.png";
import { useState } from 'react';
import { auth } from '../Firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
const Login = () => {
    const [NewUser,setNewUser]=useState(false);

    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [error,setError]=useState(false);
    const [errorMsg,setErrorMsg]=useState(false);
    const submit=(e)=>{
        e.preventDefault();
        setErrorMsg(false);
        if(NewUser){
            //create user
            createUserWithEmailAndPassword(auth,email,password)
            .then(()=>{
                localStorage.setItem("username",username);
            })
            .catch((error)=>{
                setError(true);
                const errorMessage=error.message;
                setErrorMsg(errorMessage);
            })
        }
        else{
            //sign in user
            signInWithEmailAndPassword(auth,email,password)
            .then((UserDetails)=>{
                console.log(UserDetails);
            })
            .catch((error)=>{
                setError(true)
                const errorMessage=error.message;
                setErrorMsg(errorMessage);
            })

        }
    }
  return (
    <div className="login-page">
      <header>
        <span>
            from<i>Infinity Studios</i>
        </span>
      </header>
      <img className="logo" src={infinity} alt="unable" />
      <h2 className="title">
        Sub-Min <br/>
        Dashboard
      </h2>
      <form onSubmit={submit}>
        {NewUser &&(<div className="username">
            <input 
            onChange={(e)=>setusername(e.target.value)}
            type="username" 
            id="username" 
            required />
            <label htmlFor="username">username</label>
        </div>
        )}
        <div className="email">
            <input 
            onChange={(e)=>setemail(e.target.value)}
            type="email" 
            id="email" 
            required />
            <label htmlFor="email">email</label>
        </div>
        <div className="password">
            <input 
            onChange={(e)=>setpassword(e.target.value)}
            type="password" 
            id="password" 
            required />
            <label htmlFor="password">password</label>
        </div>
        {error&& (<span className="error">Process Failed</span>)}
        {error&& (<span className="error">{errorMsg}</span>)}
        <button type="submit">{NewUser?"Sign Up":"Login"}</button>
        {NewUser? (
            <span className="user-stat">
            Already have an account? <b onClick={()=>{
                setNewUser(false)
                setErrorMsg(false)
            }}>Log In</b>
            </span>
        ):(
            <span className="user-stat">
            Don't have an account? <b onClick={()=>{
                setNewUser(true)
                setErrorMsg(false)
            }}>Sign Up</b>
             </span>
        )}
      </form>
    </div>
  )
}

export default Login
