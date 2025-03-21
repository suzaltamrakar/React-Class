import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const LandingPage = () => {
    let navigate = useNavigate();

    const handleAdminLogin = () => {
        navigate('/login')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '200px' }}>
            <h1 style={{ fontSize: '100px' }}>404</h1>
            <h1>Not Found</h1>
            <p>Please Come Tomorrow</p>
            <Button type="primary" onClick={handleAdminLogin}>Login</Button>

        </div>
    )
}

export default LandingPage
