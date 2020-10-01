import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img src='dark-amazon-logo.png' className='login__logo' />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our
          Privacy Note, our Cookies Notice and our Interest-based Ads Notice
          <button>Create your Amazon Account</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
