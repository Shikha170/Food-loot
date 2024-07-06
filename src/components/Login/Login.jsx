import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/Context';
import axios from "axios";
import { Context } from '../../context/Context';

const Login = ({ setShowlogin }) => {
  const { url, setToken } = useContext(Context); // Correctly use context
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };
  // useEffect(()=>{
  //  console.log(data); 
  // },[data])

  const onLogin = async (event) => {
    event.preventDefault();
    let newurl = url;
    if (currentState === "Login") {
      newurl += "/api/user/login";
    } else {
      newurl += "/api/user/register";
    }
    const response = await axios.post(newurl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        // localStorage
        setShowlogin(false); 
      } else {
        alert(response.data.message);
        setShowlogin(false); 
      }
    
  };

  return (
    <div className='login'>
      <form className='login-container' onSubmit={onLogin}>
        <div className='login-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-input'>
          {currentState === 'Login' ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <button type='submit'>
          {currentState === "Sign up" ? "Create Account" : "Log in"}
        </button>
        <div className='login-condition'>
          <input type='checkbox' required />
          <p>By continuing, I accept the terms and conditions</p>
        </div>
        {currentState === "Login" ? (
          <p>Create a new Account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;
