import React from "react";
import { Form, Select, Button, InputNumber, message, Input } from "antd";
import UserHeader from "../../components/UserHeader";

const { Option } = Select;

const AddRoomPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Room Added:", values);
    message.success("Room added successfully!");
    form.resetFields();
  };

  return (
    <>
      <UserHeader />
      <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
        <h2>Add a Room</h2>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          {/* Room Type Selection */}
          <Form.Item
            name="roomType"
            label="Room Type"
            rules={[{ required: true, message: "Please select room type!" }]}
          >
            <Select placeholder="Select Room Type">
              <Option value="Hostel">Hostel</Option>
              <Option value="PG">PG</Option>
            </Select>
          </Form.Item>

          {/* Location Dropdown (Sorted Alphabetically) */}
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: "Please select location!" }]}
          >
            <Select placeholder="Select Location">
              <Option value="Gahabal">Gahabal</Option>
              <Option value="Jwalakhel">Jwalakhel</Option>
              <Option value="Kumaripati">Kumaripati</Option>
              <Option value="Lagankhel">Lagankhel</Option>
              <Option value="Mangalbazar">Mangalbazar</Option>
              <Option value="Pulchok">Pulchok</Option>
            </Select>
          </Form.Item>

          {/* Price Input */}
          <Form.Item
            name="price"
            label="Price (Rs.)"
            rules={[{ required: true, message: "Please enter price!" }]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Enter price"
            />
          </Form.Item>

          {/* Number of Beds Selection */}
          <Form.Item
            name="beds"
            label="Number of Beds"
            rules={[{ required: true, message: "Please select no. of beds!" }]}
          >
            <Select placeholder="Select No. of Beds">
              <Option value={1}>1 Bed</Option>
              <Option value={2}>2 Beds</Option>
              <Option value={3}>3 Beds</Option>
              <Option value={4}>4 Beds</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Submit Button (Red) */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ backgroundColor: "red", borderColor: "red" }}>
              Add Room
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddRoomPage;
