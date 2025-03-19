import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router"
import {
    Button,
    Card,
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import { createUser, getUser, updateUser } from "../../uitls/user.util";


const { Option } = Select;

const UserAdd = () => {
    let params = useParams();
    const navigate = useNavigate();

    const [formState, setFormState] = useState(
        {
            name: "",
            age: 0,
            email: "",
            role: ""
        }
    );
    const [form] = Form.useForm();

    // to show the data from the database into table
    useEffect(() => {
        if (params.userId) {
            getUser(params.userId).then((data) => {
                setFormState(data);
                form.setFieldsValue(data);
            });
        }
    }, []);

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        if (!params.userId) {
            await createUser(values);
        } else {
            await updateUser(params.userId, values);
        }
        navigate('/admin/users');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='addpage'>
            <Card
                style={{
                    marginTop: 16,
                    width: 400,
                }}
                type="inner"
                title={<h1>{params.userId ? "Edit User" : "Add User"}</h1>}
            >

                <form>
                    <Form.Item label="Name">
                        <Input type="text" id="name" name="name" placeholder='Full Name' />
                    </Form.Item>
                    <Form.Item label="Age">
                        <Input type="number" id="age" name="age" placeholder='Age' />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input type="email" id="email" name="email" placeholder='Email Address' />
                    </Form.Item>
                    <Form.Item label="Role">
                        <Radio.Group id="role" name="role" >
                            <Radio value="Admin"> Admin </Radio>
                            <Radio value="User"> User </Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </form>
            </Card>
        </div >
    );
}

export default UserAdd;
