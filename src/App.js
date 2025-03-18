import './assets/css/main.css';
import './pages/users/Table.css';
import './pages/users/Users.css';
import './assets/css/sidebar.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Settings from './pages/Settings';
import UserAdd from './pages/users/UserAdd';
import Login from './pages/auth/Login';
// import Layout from './components/Layout';
import CustomLayout from './components/Layout';
import UserDetails from './pages/users/UserDetails';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<CustomLayout />} >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users/add" element={<UserAdd />} />
          <Route path="users/details/:userId" element={<UserDetails />} />
          <Route path="users" element={<Users title="Users" />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;

