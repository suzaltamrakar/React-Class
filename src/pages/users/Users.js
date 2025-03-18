import { NavLink, useNavigate } from "react-router";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Space, Table, Button } from 'antd';
const { Column } = Table
// import type { TableProps } from 'antd';



const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.error("There was an error fetching the data", error);
      });
  }, []);

  const handleAddUser = () => {
    navigate('/admin/users/add')
  }


  return (
    <div className="v-col users">
      <div className="heading">
        <div className="users-header">
          <h1>Users</h1>
          {/* <p>This is a {props.title}</p> */}
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="buttons">
          <Button className="btn" onClick={handleAddUser}>Add User</Button>
        </div>
      </div>

      <Table dataSource={data} rowKey="id">
        {/* <Column title="ID" dataIndex="id" key="id" /> */}
        {/* <ColumnGroup title="Name"> */}
        <Column title="Name" dataIndex="name" key="name"
          render={(_, item) => <NavLink to={`/admin/users/details/${item.id} `}>{item.name}</NavLink>} />
        {/* </ColumnGroup> */}

        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Role" dataIndex="role" key="role " />
        {/* <Column
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
        /> */}
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <NavLink to={`/admin/users/edit/${record.id}`}>Edit</NavLink>
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