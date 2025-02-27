// import './pages/users/Users.css';
// import './pages/users/Table.css';
import { useNavigate } from "react-router";
import UserData from './UserData';
import UserTableHeader from './UserTableHeader';
import UsersRow from './UsersRow';


const Users = (props) => {
  const navigate = useNavigate();
  const data = UserData;

  const handleAddUser = () => {
    // console.log('Add User');
    navigate('/admin/users/add');
  };

  return (
    <div className="v-col users">
      <div className="heading">
        <div className="users-header">
          <h1>Users</h1>
          <p>This is a {props.title}</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleAddUser}>Add User</button>
        </div>
      </div>


      <table id='users'>
        <thead>
          <UserTableHeader />
        </thead>
        <tbody>
          {data.map((user) => (<UsersRow row={user} />))}
        </tbody>
      </table>
    </div>
  );
}
export default Users;