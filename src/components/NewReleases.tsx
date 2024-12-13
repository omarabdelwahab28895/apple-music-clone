import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import MusicCard from './MusicCard';
import chillImage from '../assets/images/1a.png';
import musicaUnoImage from '../assets/images/1b.png';
import clubImage from '../assets/images/1c.png';
import rauwImage from '../assets/images/2a.png';
import feelMoreImage from '../assets/images/2b.png';
import bubleImage from '../assets/images/2c.png';
import stephanImage from '../assets/images/2d.png';
import chartShowImage from '../assets/images/2e.png';
import karriImage from '../assets/images/2f.png';

interface Track {
  id: number;
  title: string;
  artist: {
    name: string;
  };
  album: {
    cover_medium: string;
  };
}

const NewReleases: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        // Utilizzare un proxy temporaneo per risolvere il problema di CORS
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=new'
        );

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dati ricevuti:', data);
        setTracks(data.data);
      } catch (error) {
        console.error('Errore durante il fetch delle tracce:', error);
        setError('Errore durante il recupero dei dati. Riprova più tardi.');
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return (
    <Container fluid className="mt-4">
      <h2 className="text-white mb-3">Nuove Stazioni Radio</h2>
      <Row>
        <Col md={4}><MusicCard imageUrl={chillImage} title="Chill" artist="Apple Music Radio" /></Col>
        <Col md={4}><MusicCard imageUrl={musicaUnoImage} title="Música Uno" artist="Apple Music Radio" /></Col>
        <Col md={4}><MusicCard imageUrl={clubImage} title="Club" artist="Apple Music Radio" /></Col>
        <Col md={4}><MusicCard imageUrl={rauwImage} title="Rauw Alejandro" artist="Cosa Nuestra" /></Col>
        <Col md={4}><MusicCard imageUrl={feelMoreImage} title="Feel More Radio" artist="Stephan Moccio" /></Col>
        <Col md={4}><MusicCard imageUrl={bubleImage} title="Michael Bublé & Carly Pearce" artist="Zane Lowe" /></Col>
        <Col md={4}><MusicCard imageUrl={stephanImage} title="Stephan Moccio" artist="Zane Lowe" /></Col>
        <Col md={4}><MusicCard imageUrl={chartShowImage} title="Chart Show" artist="Guest Julia Michaels" /></Col>
        <Col md={4}><MusicCard imageUrl={karriImage} title="Karri & Travis Mills" artist="Apple Music" /></Col>
      </Row>

      <h2 className="text-white mb-3 mt-5">Nuove Uscite</h2>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row>
          {tracks.slice(0, 8).map((track) => (
            <Col md={3} key={track.id} className="mb-4">
              <Card className="bg-dark text-white h-100">
                <Card.Img
                  variant="top"
                  src={track.album.cover_medium}
                  alt={track.title}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{track.title}</Card.Title>
                  <Card.Text className="text-truncate">{track.artist.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default NewReleases;
