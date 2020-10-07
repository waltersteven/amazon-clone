import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img src='dark-amazon-logo.png' className='login__logo' />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={(e) => setPassword(e.target.value)} />

          <button className='login__signInButton' type='submit' onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our
          Privacy Note, our Cookies Notice and our Interest-based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
