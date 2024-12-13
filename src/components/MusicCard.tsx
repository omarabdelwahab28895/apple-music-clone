import React from 'react';
import { Card } from 'react-bootstrap';

interface MusicCardProps {
  track: {
    id: number;
    title: string;
    artist: { name: string };
    album: { cover_medium: string };
  };
}

const MusicCard: React.FC<MusicCardProps> = ({ track }) => {
  return (
    <Card className="m-2" style={{ width: '12rem' }}>
      <Card.Img variant="top" src={track.album.cover_medium} />
      <Card.Body>
        <Card.Title>{track.title}</Card.Title>
        <Card.Text>{track.artist.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;
