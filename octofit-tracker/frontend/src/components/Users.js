import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/users/')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-primary">Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;