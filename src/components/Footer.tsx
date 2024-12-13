import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-2">
            <small>Copyright © 2024 Apple Inc. Tutti i diritti riservati.</small>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <a href="#" className="text-white mx-2">Condizioni dei servizi internet</a>
            <a href="#" className="text-white mx-2">Apple Music e privacy</a>
            <a href="#" className="text-white mx-2">Avviso sui cookie</a>
            <a href="#" className="text-white mx-2">Supporto</a>
            <a href="#" className="text-white mx-2">Feedback</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
