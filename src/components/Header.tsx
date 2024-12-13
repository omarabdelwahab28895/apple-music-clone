import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Music</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Novità</Nav.Link>
          <Nav.Link href="#">Radio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
