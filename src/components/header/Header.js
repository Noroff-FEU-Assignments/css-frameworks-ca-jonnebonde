import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#news">
              <Link to="/news">News</Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;