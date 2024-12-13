import React from 'react';
import { Card } from 'react-bootstrap';

interface MusicCardProps {
  imageUrl: string;
  title: string;
  artist: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ imageUrl, title, artist }) => {
  return (
    <Card className="m-2" style={{ width: '12rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Text className="text-muted text-truncate">{artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;
