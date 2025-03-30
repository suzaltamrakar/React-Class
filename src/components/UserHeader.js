import { Button, Menu, theme } from 'antd';
import '../assets/css/landingPage.css';
import { Outlet, useNavigate, useParams } from "react-router";
import { SearchOutlined } from "@ant-design/icons";
import Logo1 from '../assets/img/Logo1.png'; // Adjust the path as needed


import React from 'react'
import { Content } from 'antd/es/layout/layout';
import UserInfo from './UserInfo';
import ActionBtn from './ActionBtn';

const UserHeader = () => {
    const navigate = useNavigate();
    let params = useParams();

    const backToHome = () => {
        navigate('/home')
    }

    const HomeNav = () => {
        navigate('/home');
    }

    const RoomNav = () => {
        navigate('/room');
    }

    const MyroomsNav = () => {
        navigate('/my-rooms');
    }

    const ListingNav = () => {
        navigate('/room/add');
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <Button style={{ border: 'none' }} onClick={backToHome}><img src={Logo1} alt='company logo' width={'auto'} height={50}></img></Button>
                </div>
                <div className='search'>
                    <input></input>
                    <button><SearchOutlined style={{ fontSize: 20, color: "white", display: "flex", justifyContent: "center", width: 30, border: "none" }} /></button>
                </div>
                <div className='nav'>
                    <Menu
                        style={{ width: '100%' }}
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                label: 'Home',
                                onClick: (HomeNav),

                            },
                            {
                                key: '2',
                                label: 'Rooms',
                                onClick: (RoomNav),

                            },
                            {
                                key: '3',
                                label: 'Add Room',
                                onClick: (ListingNav),

                            },
                            {
                                key: '4',
                                label: 'My Rooms',
                                onClick: (MyroomsNav),
                            },
                        ]}
                    />
                </div>
                <div className='userlogin'>
                    {<h1>{params.userId ? <UserInfo /> : <ActionBtn />} </h1>}
                </div>

            </div>
            <Content
                style={{
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
        </div>
    )
}

export default UserHeader;
