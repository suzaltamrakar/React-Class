import React, { useState } from "react";
import { Input, Select, Card, Row, Col, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import UserHeader from '../../components/UserHeader';

const { Option } = Select;

const roomData = [
  { id: 1, name: "Hostel Room", location: "Kumaripati", price: 5000, beds: 2 },
  { id: 2, name: "PG Room", location: "Jwalakhel", price: 3000, beds: 1 },
  { id: 3, name: "Hostel Room", location: "Mangalbazar", price: 4000, beds: 2 },
  { id: 4, name: "PG Room", location: "Pulchok", price: 7000, beds: 3 },
];

const RentPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [beds, setBeds] = useState("");

  const handleBookNow = (room) => {
    alert(`You have booked: ${room.name} in ${room.location}`);
  };

  const filteredRooms = roomData.filter((room) => {
    return (
      room.name.toLowerCase().includes(search.toLowerCase()) &&
      (location ? room.location === location : true) &&
      (price ? room.price <= parseInt(price) : true) &&
      (beds ? room.beds === parseInt(beds) : true)
    );
  });

  return (
    <>
      <UserHeader />
      <div style={{ padding: 20 }}>
        <h2>Find Your Perfect Stay</h2>
        <Row gutter={16} style={{ marginBottom: 20 }}>
          <Col span={6}>
            <Input
              placeholder="Search rooms..."
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <Select
              placeholder="Select Location"
              style={{ width: "100%" }}
              onChange={setLocation}
              allowClear
            >
              <Option value="Gahabal">Gahabal</Option>
              <Option value="Jwalakhel">Jwalakhel</Option>
              <Option value="Kumaripati">Kumaripati</Option>
              <Option value="Lagankhel">Lagankhel</Option>
              <Option value="Mangalbazar">Mangalbazar</Option>
              <Option value="Pulchok">Pulchok</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select
              placeholder="Max Price"
              style={{ width: "100%" }}
              onChange={setPrice}
              allowClear
            >
              <Option value="3000">Up to 3000</Option>
              <Option value="5000">Up to 5000</Option>
              <Option value="7000">Up to 7000</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select
              placeholder="No. of Beds"
              style={{ width: "100%" }}
              onChange={setBeds}
              allowClear
            >
              <Option value="1">1 Bed</Option>
              <Option value="2">2 Beds</Option>
              <Option value="3">3 Beds</Option>
            </Select>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <Col span={8} key={room.id}>
                <Card
                  title={room.name}
                  bordered={false}
                  cover={
                    <img
                      alt="room"
                      src="https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/pg-in-mumbai.jpg"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <p>📍 {room.location}</p>
                  <p>💰 Price: Rs. {room.price}</p>
                  <p>🛏 Beds: {room.beds}</p>
                  <Button type="primary" danger block onClick={() => handleBookNow(room)}>
                    Book Now
                  </Button>
                </Card>
              </Col>
            ))
          ) : (
            <p>No rooms found</p>
          )}
        </Row>
      </div>
    </>
  );
};

export default RentPage;
