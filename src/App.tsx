import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Garage from './pages/Garage/Garage';
import Winners from './pages/Winners/Winners';

function App() {
  return (
    <div className="px-10 from-neutral-800">
      <Header />
      <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </div>
  );
}

export default App;
