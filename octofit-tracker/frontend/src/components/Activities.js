import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/activities/')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-primary">Activities</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Activity Type</th>
                        <th>Duration (seconds)</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity._id}>
                            <td>{activity.activity_type}</td>
                            <td>{activity.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Activities;