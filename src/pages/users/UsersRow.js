import React from 'react'

const UsersRow = ({ row }) => {
    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.firstname}</td>
            <td>{row.lastname}</td>
            <td>{row.age}</td>
            <td>{row.email}</td>
            <td>{row.role}</td>
        </tr>
    )
}

export default UsersRow
