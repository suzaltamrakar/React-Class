import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="v-col sidebar">
      <ul className="sidebar-menu">
        <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/admin/users">Users</NavLink></li>
        <li><NavLink to="/admin/settings">Settings</NavLink></li>
        <li><NavLink to="/login">Logout</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;