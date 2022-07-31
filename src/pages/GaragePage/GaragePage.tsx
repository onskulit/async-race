import React from 'react';
import Controls from '../../components/Garage/Controls/Controls';
import Garage from '../../components/Garage/Garage/Garage';

function GaragePage() {
  return (
    <main className="text-xl">
      <div className="px-2 py-10 shadow-lg">
        <Controls />
      </div>
      <div className="px-2 py-10 shadow-lg">
        <Garage />
      </div>
    </main>
  );
}

export default GaragePage;
