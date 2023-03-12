import React from 'react'
import "../Styling/Login.css";
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className='login'>
        <Link>
        <img className='loginLogo' src='./shop.png' alt="logo"/>
        </Link>
        <div className='loginContainer'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="email"/>
                <h5>Password</h5>
                <input type="password"/><br/>
                <Link to="/home">
                <button type="submit" className='signInButton'>Sign In</button>
                </Link>
            </form>
            <p>By signing In you are agreeing ShopNow TERMS and CONDITION</p>
             <button type="submit" className='signUpButton'>Create Your account..</button>
        </div>
      
    </div>
  )
}
