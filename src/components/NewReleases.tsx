import React from 'react';
import { Container, Row } from 'react-bootstrap';
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

const NewReleases = () => {
  return (
    <Container>
      <h2 className="text-white my-4">Nuove Uscite</h2>
      <Row>
        <MusicCard imageUrl={chillImage} title="Chill" artist="Apple Music Radio" />
        <MusicCard imageUrl={musicaUnoImage} title="Música Uno" artist="Apple Music Radio" />
        <MusicCard imageUrl={clubImage} title="Club" artist="Apple Music Radio" />
        <MusicCard imageUrl={rauwImage} title="Rauw Alejandro" artist="Cosa Nuestra" />
        <MusicCard imageUrl={feelMoreImage} title="Feel More Radio" artist="Stephan Moccio" />
        <MusicCard imageUrl={bubleImage} title="Michael Bublé & Carly Pearce" artist="Zane Lowe" />
        <MusicCard imageUrl={stephanImage} title="Stephan Moccio" artist="Zane Lowe" />
        <MusicCard imageUrl={chartShowImage} title="Chart Show" artist="Guest Julia Michaels" />
        <MusicCard imageUrl={karriImage} title="Karri & Travis Mills" artist="Apple Music" />
      </Row>
    </Container>
  );
};

export default NewReleases;
