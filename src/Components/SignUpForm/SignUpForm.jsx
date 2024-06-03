/*import React from 'react';
import './SignUpForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
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
                <input type="text" placeholder='Email' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Confirm Password" required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register Now</a></p>
            </div>
        </form>
      
    </div>
  )
}

export default LoginForm*/
import React from 'react';
import './SignUpForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

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
                    <input type="text" placeholder='Email' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register Now</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
