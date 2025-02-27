import React, { useState } from 'react'

const UserAdd = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const [age, setAge] = useState();
    const [ageError, setAgeError] = useState("");
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const [role, setRole] = useState("");
    const [roleError, setRoleError] = useState("");
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    const handleSubmit = (e) => {
        if (name === "") {
            setNameError("Name is required");
        } else {
            setNameError("");
        }

        if (age === "") {
            setAgeError("Age is required");
        } else {
            setAgeError("");
        }

        if (email === "") {
            setEmailError("Email is required");
        } else {
            setEmailError("");
        }

        if (role === "") {
            setRoleError("Role is required");
        } else {
            setRoleError("");
        }

        const savingData = {
            name: name,
            age: age,
            email: email,
            role: role
        };
        console.log(savingData);

    }

    return (
        <div className='addpage'>
            <div className="addpage-box">
                <h1> Add User </h1>
                <form>
                    <div className="name field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder='Full Name' />
                        <div className="error">{nameError}</div>
                    </div>

                    <div className="age field">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" value={age} onChange={handleAgeChange} placeholder='Phone Number' />
                        <div className="error">{ageError}</div>
                    </div>

                    <div className="email field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder='Email Address' />
                        <div className="error">{emailError}</div>
                    </div>

                    <div className="role field">
                        <label htmlFor="role">Role:</label>
                        <select id="role" name="role" value={role} onChange={(e) => { handleRoleChange(e) }}>
                            <option value="">Select Role</option>
                            <option value="admin" selected={role === "admin"}>Admin</option>
                            <option value="user" selected={role === "user"}>User</option>
                        </select>
                        <div className="error">{roleError}</div>
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
