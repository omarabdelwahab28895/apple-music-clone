import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../assets/logos/music.svg'; 
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark vh-100 text-white p-3">
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="Apple Music Logo"
          className="img-fluid"
          style={{ maxWidth: '150px' }}
        />
      </div>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white mb-3">
          <i className="bi bi-house-door me-2"></i> Home
        </Nav.Link>
        <Nav.Link href="#" className="text-white mb-3 active">
          <i className="bi bi-music-note-list me-2"></i> Novità
        </Nav.Link>
        <Nav.Link href="#" className="text-white mb-3">
          <i className="bi bi-broadcast me-2"></i> Radio
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
