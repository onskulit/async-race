import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import GaragePage from './pages/GaragePage/GaragePage';
import WinnersPage from './pages/WinnersPage/WinnersPage';

function App() {
  return (
    <div className="px-10 from-neutral-800">
      <Header />
      <Routes>
        <Route path="/" element={<GaragePage />} />
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </div>
  );
}

export default App;
