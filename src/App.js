import './assets/css/main.css';
import './pages/users/Table.css';
import './pages/users/Users.css';
import { BrowserRouter, Routes, Route } from "react-router";

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Settings from './pages/Settings';
import UserAdd from './pages/users/UserAdd';

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <div className="v-row main-wrapper">
        <Sidebar/>
        <div className="v-col main-body">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard title="Hello Admin" />} />
            <Route path="/admin/users" element={<Users title="User Page"/>} />
            <Route path="/admin/users/add" element={<UserAdd title="Add User Page"/>} />
            <Route path="/admin/settings" element={<Settings title="setting Page"/>} />
          </Routes>
        </div>
      </div> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;

