/* import React from 'react';
import './SignUpForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder="Email" required />
                <MdEmail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>I agree to the terms & conditionse</label>
            </div>
            <button type="submit">Register</button>

            <div className="register-link">
                <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
            </div>
        </form>
        <button type="submit" className="google">Sign Up with Google</button>
      
    </div>
  )
}

export default SignUpForm*/
import React from 'react';
import './SignUpForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div>
        <img src="/MDCC logo.png" alt="Logo" className="logo" />
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>I agree to the terms & conditions</label>
                </div>
                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/LoginForm">Login</Link></p>
                </div>
            </form>
            <button type="button" className="google">Sign Up with Google</button>
        </div>
    </div>
  )
}

export default SignUpForm;
