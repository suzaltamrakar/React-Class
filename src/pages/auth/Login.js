import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import Column from 'antd/es/table/Column';

const Login = () => {
  const Navigate = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    password: ""
  });

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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
    // <div className="login-container">
    //   <div className="login-box">
    //     <h1>Login</h1>
    //     <form onSubmit={handleLogin}>
    //       {error && <div className="error">{error}</div>}

    //       <div className="field">
    //         <label htmlFor="email">Email:</label>
    //         <input type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} placeholder="Email Address" />
    //       </div>
    //       <div className="field">
    //         <label htmlFor="password">Password:</label>
    //         <input type="password" id="password" name="password" value={users.password} onChange={handlePasswordChange} placeholder="Password" />
    //       </div>
    //       <button type="button" onClick={handleButtonClick}>Login</button>
    //     </form>
    //   </div>
    // </div>

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
      <Form onSubmit={handleLogin} name="login" initialValues={{ remember: true, }}
        style={{ maxWidth: 360, width: "100%", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", textAlign: "center" }}
        onFinish={onFinish}
      >
        <h1 style={{ paddingBottom: '10px' }}>Login Page</h1>
        {error && <div className="error">{error}</div>}

        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!', },]}>
          <Input prefix={<UserOutlined />} placeholder="Username" type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" id="password" name="password" value={users.password} onChange={handlePasswordChange} />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="#">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item className='Login-button' style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>

          <Button style={{
            width: '100%',
            height: '40px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#ffffff',
            backgroundColor: '#1890ff',
            border: 'none',
            borderRadius: '5px'
          }} type="button" onClick={handleButtonClick}> Log in</Button>
          <span style={{ display: "block" }}>or</span>
          <a href="#" style={{ textDecoration: 'none', color: '#1890ff' }}>Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;