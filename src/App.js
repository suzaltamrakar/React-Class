import './assets/css/main.css';
import './pages/users/Table.css';
import './pages/users/Users.css';
import './assets/css/sidebar.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';
import { UserContext } from './context/user.context';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Settings from './pages/Settings';
import UserAdd from './pages/users/UserAdd';
import Login from './pages/auth/Login';
import LandingPage from './pages/users/LandingPage';
import CustomLayout from './components/Layout';
import UserDetails from './pages/users/UserDetails';

const App = () => {

  const [_user, _setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

  return (
    <UserContext.Provider value={{ _user, _setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin" element={<CustomLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users title="Users" />} />
            <Route path="user/create" element={<UserAdd />} />
            <Route path="user/edit/:userId" element={<UserAdd />} />
            <Route path="user/details/:userId" element={<UserDetails />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </UserContext.Provider >

  );
}

export default App;

