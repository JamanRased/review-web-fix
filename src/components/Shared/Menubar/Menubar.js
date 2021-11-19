import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'
const Menubar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Digital Skills In <strong>Bangladesh</strong> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0" variant="pills" defaultActiveKey="/home"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                  </Nav>
                  <div className="d-flex">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/course">Course</Nav.Link>
                    <Nav.Link as={Link} to="/review">Review</Nav.Link>               
                    </div>
                    <Nav>
                      <Nav.Link as={Link} to="/about">About Us</Nav.Link>          
                    </Nav>
                    <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
             
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;