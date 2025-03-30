import React, { useState } from "react";
import { Card, Row, Col, Select } from "antd";
import "../../assets/css/home.css";
import Hero from "../../components/Hero";
import UserHeader from "../../components/UserHeader";
import Logo from '../../assets/img/Logo.png';

const { Option } = Select;
const roomData = [
    { id: 1, name: "Deluxe Room", location: "Kathmandu", price: 5000, beds: 2 },
    { id: 2, name: "Single Room", location: "Pokhara", price: 3000, beds: 1 },
    { id: 3, name: "Double Room", location: "Lalitpur", price: 4000, beds: 2 },
    { id: 4, name: "Luxury Suite", location: "Kathmandu", price: 7000, beds: 3 },
    { id: 5, name: "Standard Room", location: "Bhaktapur", price: 3500, beds: 1 },
];

const Home = () => {
    const [location, setLocation] = useState("");

    const filteredRooms = roomData.filter((room) =>
        location ? room.location === location : true
    );

    const suggestedRooms = filteredRooms.slice(0, 3);

    return (
        <div>
            <UserHeader />
            <Hero />

            {/* Suggestions & Filter on the Same Line */}
            <div className="suggestions-header">
                <h2 className="suggest">Suggestions</h2>
                <Select
                    placeholder="Filter by Location"
                    style={{ width: 200 }}
                    onChange={setLocation}
                    allowClear
                >
                    <Option value="Bhaktapur">Bhaktapur</Option>
                    <Option value="Kathmandu">Kathmandu</Option>
                    <Option value="Lalitpur">Lalitpur</Option>
                    <Option value="Pokhara">Pokhara</Option>
                </Select>
            </div>

            {/* Suggestions Section */}
            <Row gutter={[16, 16]} className="cards">
                {suggestedRooms.map((room) => (
                    <Col span={8} key={room.id}>
                        <Card
                            style={{ width: 300, margin: 20 }}
                            cover={
                                <img
                                    alt={room.name}
                                    src="https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/pg-in-mumbai.jpg"
                                />
                            }
                        >
                            <div className="product-details">
                                <div className="details">
                                    <h3>{room.name}</h3>
                                    <a href="#">View</a>
                                </div>
                                <div className="location">
                                    <p>📍 {room.location}</p>
                                </div>
                                <div className="price">
                                    <h4>💰 Nrs. {room.price}</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Footer */}
            <footer className="footer">
                <img src={Logo} alt='company logo' width={100} height={50}></img>
                <p>© 2025 Rentomatic. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
