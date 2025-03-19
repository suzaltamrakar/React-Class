import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Space, Table, Button, Card } from 'antd';
import { getUsers } from "../../uitls/user.util";
const { Column } = Table

const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setData(response);
    });
  }, []);

  const handleAddUser = () => {
    navigate('/admin/users/add')
  }


  return (
    <div className="v-col users">
      <Card
        style={{
          marginTop: 16,
        }}
        type="inner"

        title={<h1>{props.title}</h1>}

        // <div className="search">
        //   <input type="text" placeholder="Search" />
        //   <button>Search</button>
        // </div>
        extra={<Button type="primary" onClick={handleAddUser}>Add User</Button>}
      >

      <Table dataSource={data} rowKey="id">

        <Column title="Name" dataIndex="name" key="name"
          render={(_, item) => <NavLink to={`/admin/users/details/${item.id} `}>{item.name}</NavLink>} />

        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Role" dataIndex="role" key="role " />

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
    </Card>

    </div >
  );
}

export default Users;