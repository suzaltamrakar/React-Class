// import './pages/users/Users.css';
// import './pages/users/Table.css';
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserData from './UserData';
import UserTableHeader from './UserTableHeader';
import UsersRow from './UsersRow';


const Users = (props) => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const data = UserData;

  const handleAddUser = () => {
    // console.log('Add User');
    navigate('/admin/users/add');
  };

  // useEffect(() => {
  //   setData([
  //     { id: 1, name: 'John Doe', age: 25, email: 'john@a.com' },
  //     { id: 2, name: 'Jane Doe', age: 24, email: 'jane@gmail.com'},
  //     { id: 3, name: 'John Smith', age: 30, email: 'smith@gamil.com'},
  //     { id: 4, name: 'Jane Smith', age: 28, email: 'xyz@gmail.com'},
  //     { id: 5, name: 'John Brown', age: 35, email: 'brown@yahoo.com'},
  //   ]);
  // }, []);

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