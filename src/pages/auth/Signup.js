import React, { useState, useContext, useEffect } from 'react';
import './login.css';
import { useParams, useNavigate } from 'react-router';
import { Button, Form, Input, Card, Select } from 'antd';
import { checkLogin } from '../../utils/user.util';
import { UserContext } from '../../context/user.context';
import { showerrorToast, showSuccessToast } from '../../utils/toastify.utils';
import { Option } from 'antd/es/mentions';
import { SiGnuprivacyguard } from 'react-icons/si';

const Signup = () => {
  const navigate = useNavigate();
  let params = useParams();
  const [message] = useState('');
  const { _setUser } = useContext(UserContext);

  const onFinish = (values) => {
    console.log('Success:', values);
    checkLogin(values.username, values.password).then((data) => {
      console.log(values);
      if (data === null) {
        showerrorToast("Login Failed");
      } else {
        showSuccessToast("Login Successful");
        _setUser(data);
        localStorage.setItem('is_login', 1);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/admin/dashboard');
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [form] = Form.useForm();

  return (
    <div>
      <Card
        style={{
          marginTop: 16,
          width: 500,
          margin: '100px auto',
        }}
        type="inner"
        title={<h1>Signup</h1>}
      >
        {message && <div>{message}</div>}
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                type: 'text',
                message: 'The input is not valid name!',
              },
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                type: 'password',
                message: 'The input is not valid Password!',
              },
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: 'Please select role!',
              },
            ]}
          >
            <Select placeholder="select your role">
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>


    </div>
  );
};
export default Signup;