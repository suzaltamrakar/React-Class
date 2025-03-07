import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router';

const Login = () => {
  const Navigate = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setUsers({ ...users, email: e.target.value });
    setError('');
  }

  const handlePasswordChange = (e) => {
    setUsers({ ...users, password: e.target.value });
    setError('');
  }

  const handleButtonClick = () => {
    console.log('Button Clicked');
    console.log(users);
    if (users.email === 'ADMIN' && users.password === 'admin') {
      console.log('login successful');
      localStorage.setItem('is_login', 1);
      Navigate('/admin/dashboard');
    } else {
      localStorage.setItem('is_login', 0);
      console.log('Invalid email or password');
      setError('Invalid email or password');
    }

  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (users.email === '' || users.password === '') {
      setError('Email and Password are required');
    } else {
      setError('');
      console.log('Logging in with', users.email, users.password);
      // Perform login action
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          {error && <div className="error">{error}</div>}

          <div className="field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} placeholder="Email Address" />
          </div>
          <div className="field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={users.password} onChange={handlePasswordChange} placeholder="Password" />
          </div>
          <button type="button" onClick={handleButtonClick}>Login</button>
        </form>
      </div>
    </div>



    // <div className="login-box">
    //   <h1>Login</h1>
    //   <form className="login-form">
    //     <div className="field">
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" name="email" placeholder="Email Address" />
    //     </div>
    //     <div className="field">
    //       <label htmlFor="password">Password:</label>
    //       <input type="password" id="password" name="password" placeholder="Password" />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>

    // </div>

  );
};

export default Login;