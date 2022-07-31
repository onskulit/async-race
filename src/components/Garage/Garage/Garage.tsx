import React from 'react';
import Car from './Car/Car';

function Garage() {
  return (
    <div>
      <h2 className="text-2xl flex justify-center mb-4">Garage</h2>
      <div className="px-5">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </div>
  );
}

export default Garage;
