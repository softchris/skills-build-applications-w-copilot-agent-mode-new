import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/workouts/')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-primary">Workouts</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Workout Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout._id}>
                            <td>{workout.name}</td>
                            <td>{workout.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Workouts;