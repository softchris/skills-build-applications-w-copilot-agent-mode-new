import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/leaderboard/')
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-primary">Leaderboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(entry => (
                        <tr key={entry._id}>
                            <td>{entry.user.username}</td>
                            <td>{entry.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Leaderboard;