import { Button } from 'antd';
import React from 'react';
import '../assets/css/landingPage.css';
import { useNavigate } from 'react-router';



const actionBtn = () => {
    const navigate = useNavigate;
    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignup = () => {
        navigate('/signup')
    }
    return (
        <div>
            <div className='action'>
                <Button type="primary" onClick={handleLogin}>Login</Button>
                <Button type="primary" onClick={handleSignup}>Signup</Button>
            </div>
        </div>
    )
}

export default actionBtn;
