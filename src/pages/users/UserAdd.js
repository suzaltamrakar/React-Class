import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router"

const UserAdd = () => {
    let params = useParams();
    const navigate = useNavigate();

    const [users, setUsers] = useState({
        name: "",
        age: "",
        email: "",
        role: ""
    });

    const [error, setError] = useState({
        name: "",
        age: "",
        email: "",
        role: ""
    });



    const handleNameChange = (e) => {
        setUsers({ ...users, name: e.target.value });
        setError({ ...error, name: "" });
    }

    const handleAgeChange = (e) => {
        setUsers({ ...users, age: e.target.value });
        setError({ ...error, age: "" });
    }


    const handleEmailChange = (e) => {
        setUsers({ ...users, email: e.target.value });
        setError({ ...error, email: "" });
    }


    const handleRoleChange = (e) => {
        setUsers({ ...users, role: e.target.value });
        setError({ ...error, role: "" });
    }

    const handleSubmit = (e) => {
        const validationError = {
            name: "",
            age: "",
            email: "",
            role: ""
        };

        let isValid = true;

        if (users.name === "") {
            validationError.name = "Name is required";
            isValid = false;
        }
        if (users.email === "") {
            validationError.email = "Email is required";
            isValid = false;
        }
        if (users.age === 0) {
            validationError.age = "Age is required";
            isValid = false;
        }
        if (users.role === "") {
            validationError.role = "Role is required";
            isValid = false;
        }
        setError(validationError);
        if (!isValid) {
            return;
        }
        console.log(users);

        // Create new user
        if (!params.userId) {
            axios.post(`http://localhost:4000/users`, users)
                .then(function (response) {
                    // handle success
                    navigate('/admin/users');
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        } 
        // edit user details
        else { 
            axios.patch(`http://localhost:4000/users/${params.userId}`, users)
                .then(function (response) {
                    // handle success
                    navigate('/admin/users');
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

    }
// to show the data from the database into table
    useEffect(() => {
        axios.get(`http://localhost:4000/users/${params.userId}`)
            .then(function (response) {
                // handle success
                setUsers(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div className='addpage'>
            <div className="addpage-box">
                <h1>{params.userId ? "Edit" : "Add"} User</h1>
                <form>
                    <div className="name field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={users.name} onChange={handleNameChange} placeholder='Full Name' />
                        <div className="error">{error.name}</div>
                    </div>

                    <div className="age field">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" value={users.age} onChange={handleAgeChange} placeholder='Age' />
                        <div className="error">{error.age}</div>
                    </div>

                    <div className="email field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} placeholder='Email Address' />
                        <div className="error">{error.email}</div>
                    </div>

                    <div className="role field">
                        <label htmlFor="role">Role:</label>
                        <select id="role" name="role" value={users.role} onChange={(e) => { handleRoleChange(e) }}>
                            <option value="">Select Role</option>
                            <option value="Admin" selected={users.role === "Admin"}>Admin</option>
                            <option value="User" selected={users.role === "User"}>User</option>
                        </select>
                        <div className="error">{error.role}</div>
                    </div>

                    {/* <div className="select-role">
                        <label>Role</label>
                        <select>
                            <option value="admin" selected={role === "admin"}>Admin</option>
                            <option value="user" selected={role === "user"}>User</option>
                        </select>
                    </div> */}
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserAdd
