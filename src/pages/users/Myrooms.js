import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Space, Table, Button, Card, Modal } from 'antd';
import { deleteUser, getUsers } from "../../utils/user.util";
import { showSuccessToast } from "../../utils/toastify.utils";
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import UserHeader from "../../components/UserHeader";

const { Column } = Table

const MyRooms = (props) => {
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

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const showModal = (id) => {
    setDeleteId(id)
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const deleteModal = () => {
    deleteUser(deleteId).then(() => {
      getUsers().then((response) => {
        setData(response);
        showSuccessToast('User deleted successfully');
        setOpen(false);
      });
    });
  };

  return (
    <div>
      <UserHeader />
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
          extra={<Button type="primary" onClick={handleAddUser}>Add Rooms</Button>}
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
                  <NavLink to={`/admin/users/edit/${record.id}`}> <EditOutlined />Edit</NavLink>
                  <a style={{ color: 'red' }}><DeleteOutlined onClick={() => showModal(record.id)} style={{ color: 'red' }} />Delete</a>
                </Space>
              )}
            />
          </Table>
        </Card>
        <Modal
          title="Are you sure about that!!"
          open={open}
          onOk={deleteModal}
          onCancel={hideModal}
          okText="Yes"
          cancelText="Cancel"
        ></Modal>

      </div >
    </div>
  )
}

export default MyRooms;
