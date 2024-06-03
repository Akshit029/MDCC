/* import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/SignUpForm">Register</Link></p>
            </div>
        </form>
        <button type="submit" className="google">Sign in with google</button>
      
    </div>
  )
}

export default LoginForm*/
import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
        <img src="/MDCC logo.png" alt="Logo" className="logo" />
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/SignUpForm">Register</Link></p>
                </div>
            </form>
            <button type="button" className="google">Sign in with Google</button>
        </div>
    </div>
  )
}

export default LoginForm;
