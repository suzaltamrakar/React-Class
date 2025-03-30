import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Button, Form, Input, Card } from 'antd';
import { checkLogin } from '../../utils/user.util';
import { UserContext } from '../../context/user.context';
import { showerrorToast, showSuccessToast, showAdminToast } from '../../utils/toastify.utils';

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const { _setUser } = useContext(UserContext);

  const onFinish = (values) => {
    console.log('Success:', values);

    checkLogin(values.username, values.password).then((data) => {
      console.log(values);

      if (values.username === 'admin' && values.password === 'admin') {
        showAdminToast('Admin Login successful');
        navigate('/admin/dashboard');
        return;
      }

      if (data === null) {
        showerrorToast("Login Failed");
      } else {
        showSuccessToast("User Login Successful");
        _setUser(data);
        localStorage.setItem('is_login', 1);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/user/dashboard');  // Redirect users to user dashboard
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Card
        style={{
          marginTop: 16,
          width: 500,
          margin: '100px auto',
        }}
        type="inner"
        title={<h1>Login</h1>}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
