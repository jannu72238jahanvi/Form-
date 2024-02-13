import React, { useState } from 'react';
import './loginsignup.css'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1 className='wel'>Wellcome to popX</h1>
      <h2 className='wel-1'> Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,</h2>
    <br></br>
      <button className='wel-2'>Create Account</button>
      <br></br>
      <br></br>
      <button className='wel-3'> Already Registered ? Login </button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
    
    

export default LoginPage;
