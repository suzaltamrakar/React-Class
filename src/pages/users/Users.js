// import './pages/users/Users.css';
// import './pages/users/Table.css';
// import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router";
import UserData from './UserData';
import UserTableHeader from './UserTableHeader';
import UsersRow from './UsersRow';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table
// import type { TableProps } from 'antd';


const Users = (props) => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const data = UserData;

  const handleAddUser = () => {
    navigate('/admin/users/add')
  }


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

      <Table dataSource={data}>
        <Column title="ID" dataIndex="id" key="id" />
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstname" key="firstname" />
          <Column title="Last Name" dataIndex="lastname" key="lastname" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Role" dataIndex="role" key="role " />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
      {/* <table id='users'>
        <thead>
          <UserTableHeader />
        </thead>
        <tbody>
          {data.map((user) => (<UsersRow row={user} />))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Users;