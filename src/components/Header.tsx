import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../assets/logos/apple.svg'; 
import './Header.css'; 
import { BsPlayFill, BsSkipForwardFill, BsSkipBackwardFill } from 'react-icons/bs'; 

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container fluid className="d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center controls">
          <Button variant="outline-light" className="me-2">
            <BsSkipBackwardFill size={20} />
          </Button>
          <Button variant="outline-light" className="me-2">
            <BsPlayFill size={24} />
          </Button>
          <Button variant="outline-light">
            <BsSkipForwardFill size={20} />
          </Button>
        </div>

        <Navbar.Brand href="#" className="mx-auto">
          <img
            src={logo}
            alt="Apple Music Logo"
            height="30"
            className="d-block"
          />
        </Navbar.Brand>

        <Nav>
          <Button variant="danger" className="px-4">
            Accedi
          </Button>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default Header;

