import React from 'react'

const UsersRow = ({ row }) => {
    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.role}</td>
            <td>{row.email}</td>
        </tr>
    )
}

export default UsersRow
