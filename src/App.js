import './assets/css/main.css';
import './pages/admin/Table.css';
import './pages/admin/Users.css';
import './assets/css/sidebar.css';

import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';
import { UserContext } from './context/user.context';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Users from './pages/admin/Users';
import UserAdd from './pages/admin/UserAdd';
import Login from './pages/auth/Login';
import LandingPage from './pages/users/LandingPage';
import CustomLayout from './components/Layout';
import UserDetails from './pages/admin/UserDetails';
import Signup from './pages/auth/Signup';
import Home from './pages/users/Home';
import RentPage from './pages/users/Rent';
import Favourite from './pages/users/Myrooms';
import AddRooms from './pages/users/AddRooms';
import RoomDetails from './pages/admin/RoomDetails';
import MyRooms from './pages/users/Myrooms';
const App = () => {

  const [_user, _setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

  return (
    <UserContext.Provider value={{ _user, _setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin" element={<CustomLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="rooms" element={<RoomDetails />} />
            <Route path="users" element={<Users title="Users" />} />
            <Route path="user/create" element={<UserAdd />} />
            <Route path="user/edit/:userId" element={<UserAdd />} />
            <Route path="user/details/:userId" element={<UserDetails />} />
          </Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="my-rooms" element={<MyRooms />} />
          <Route path="room" element={<RentPage />} />
          <Route path="room/add" element={<AddRooms />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </UserContext.Provider >

  );
}

export default App;

