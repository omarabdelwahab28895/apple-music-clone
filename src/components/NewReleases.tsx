import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';
import { Container, Row, Spinner } from 'react-bootstrap';

const NewReleases: React.FC = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pop')
      .then(response => response.json())
      .then(data => {
        setTracks(data.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h2 className="my-4 text-white">Nuove Uscite</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row>
          {tracks.slice(0, 8).map((track: any) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default NewReleases;
