import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const App = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Octofit Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/activities">Activities</Nav.Link>
                            <Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
                            <Nav.Link as={NavLink} to="/teams">Teams</Nav.Link>
                            <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
                            <Nav.Link as={NavLink} to="/workouts">Workouts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <Routes>
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/workouts" element={<Workouts />} />
                    <Route path="/" element={<h1 className="text-center text-primary">Welcome to Octofit Tracker</h1>} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
