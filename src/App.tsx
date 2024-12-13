import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NewReleases from './components/NewReleases';
import './App.css';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <main className="p-4">
          <h1 className="text-white">Novità</h1>
          <NewReleases />
        </main>
      </div>
    </div>
  );
}

export default App;
