import { Navigate, Outlet, useNavigate } from "react-router";
import React, { useEffect, useState } from 'react';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const CustomLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();
    useEffect(() => {
        const isLogin = localStorage.getItem('is_login');
        if (isLogin !== '1') {
            navigate('/login');
        }
    }
        , []);
    return (
        <>
            {/* <Header />
        <div className="v-row main-wrapper">
          <Sidebar/>
          <div className="v-col main-body">
            <Outlet />
          </div>
        </div> 
        <Footer /> */}

            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <DashboardOutlined />,
                                label: 'Dashboard',
                                onClick: () => Navigate('/admin/dashboard'),

                            },
                            {
                                key: '2',
                                icon: <UserOutlined />,
                                label: 'User',
                                onClick: () => Navigate('/admin/user'),

                            },
                            {
                                key: '3',
                                icon: <SettingOutlined />,
                                label: 'Setting',
                                onClick: () => Navigate('/admin/setting'),

                            },
                            {
                                key: '4',
                                icon: <LogoutOutlined />,
                                label: 'Logout',
                                onClick: ()=> Navigate('/logout'),
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default CustomLayout;
