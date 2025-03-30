import { Avatar } from 'antd';
import React from 'react';
import '../assets/css/landingPage.css';
import { UserOutlined } from "@ant-design/icons";


const UserInfo = () => {
    return (
        <div>
            <div className='user-info'>
                <Avatar icon={<UserOutlined />} style={{ fontSize: 18 }} />
                <h3>Sujal Tamrakar</h3>
            </div>
        </div>
    )
}

export default UserInfo
