import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Heading() {

  const location = useLocation();

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <div className='nav-container-mobile'>
        <Navbar.Brand href="#home" to="/">
            The YAY Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav activeKey={location.pathname} className="me-auto">
            <NavLink href="#home" to="/">
              Home
            </NavLink>
            <NavLink href="#news" to="/news">
              News
            </NavLink>
            <NavLink href="#contact" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Form className="d-flex search-container">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="searchButton">Go</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Heading;