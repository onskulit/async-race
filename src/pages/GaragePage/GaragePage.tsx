import React, { useCallback, useEffect, useState } from 'react';
import { garageApi } from '../../api/requests';
import Controls from '../../components/Garage/Controls/Controls';
import Garage from '../../components/Garage/Garage/Garage';
import { ICar } from '../../types/interfaces';

function GaragePage() {
  const [cars, setCars] = useState<ICar[]>([]);

  async function updateCars() {
    const result = await garageApi.getCars();
    setCars(result);
  }
  useEffect(() => {
    updateCars();
  }, []);

  const deleteCar = useCallback((id: number) => {
    garageApi.deleteCar(id)
      .then(() => updateCars());
  }, []);

  const setCar = useCallback(({ name, color }: { name: string, color: string}) => {
    garageApi.setCar({ name, color })
      .then(() => updateCars());
  }, []);

  return (
    <main className="text-xl">
      <div className="px-2 py-10 shadow-lg">
        <Controls setCar={setCar} />
      </div>
      <div className="px-2 py-10 shadow-lg">
        <Garage cars={cars} deleteCar={deleteCar} />
      </div>
    </main>
  );
}

export default GaragePage;
