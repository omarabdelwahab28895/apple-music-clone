import React from 'react';
import Header from './components/Header';
import NewReleases from './components/NewReleases';
import './App.css'; 

function App() {
  return (
    <div className="bg-dark min-vh-100 text-white">
      <Header />
      <main className="container mt-4">
        <h1 className="mb-4">Novità</h1>
        <NewReleases />
      </main>
    </div>
  );
}

export default App;
