import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.setItem('is_login', 0);
    // navigate('/login');  
  }

  return (
    <div className="v-col sidebar">
      <ul className="sidebar-menu">
        <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/admin/users">Users</NavLink></li>
        <li ><NavLink to="/admin/settings">Settings</NavLink></li>
        <li className="logout-button"><button type="button" onClick={handleLogoutClick}>Logout11</button></li>      </ul>
    </div>
  );
}

export default Sidebar;