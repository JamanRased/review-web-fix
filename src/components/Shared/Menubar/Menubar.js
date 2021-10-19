import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
const Menubar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Digital Skills In Bangladesh</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link to="/course">Course</Nav.Link>
                    <Nav.Link to="/review">Review</Nav.Link>
                    <Nav.Link to="/about">About Us</Nav.Link>
                    <Nav.Link to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;