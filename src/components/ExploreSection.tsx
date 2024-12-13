import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ExploreSection: React.FC = () => {
  const exploreItems = [
    'Esplora per genere',
    'Decenni',
    'Attività e stati d\'animo',
    'Worldwide',
    'Classifiche',
    'Audio spaziale',
    'Video musicali',
    'Nuovi artisti',
    'Hit del passato',
  ];

  return (
    <Container fluid className="mt-5">
      <h2 className="text-white mb-3">Altro da esplorare</h2>
      <Row>
        {exploreItems.map((item, index) => (
          <Col md={4} className="mb-3" key={index}>
            <Button variant="dark" className="w-100 text-start border-0 text-white">
              {item} <span className="float-end">{'>'}</span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreSection;
