import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/teams/')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-primary">Teams</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Members</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team._id}>
                            <td>{team.name}</td>
                            <td>{team.members.length}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Teams;