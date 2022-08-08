import React, { useCallback, useEffect, useState } from 'react';
import { garageApi } from '../../api/requests';
import generateCars from '../../carsGenerator/carsGenerator';
import Controls from '../../components/Garage/Controls/Controls';
import Garage from '../../components/Garage/Garage/Garage';
import { RaceStatus } from '../../types/enums';
import { ICar } from '../../types/interfaces';
import { updateArrayForPage, updateMaxPage } from '../../utils/pages';

interface GaragePageProps {
  currentPage: number;
}

function GaragePage({ currentPage }: GaragePageProps) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [selectedCar, setSelectedCar] = useState<ICar>({ name: '', color: '', id: 0 });
  const [maxPage, setMaxPage] = useState(updateMaxPage<ICar>(cars));
  const [carsForPage, setCarsForPage] = useState(updateArrayForPage<ICar>(cars, currentPage));
  const [raceStatus, setRaceStatus] = useState(RaceStatus.init);

  async function updateCars() {
    const result = await garageApi.getCars();
    setCars(result);
    setCarsForPage(updateArrayForPage<ICar>(result, currentPage));
    setMaxPage(updateMaxPage<ICar>(cars));
  }

  useEffect(() => {
    setRaceStatus(RaceStatus.init);
    updateCars();
  }, [currentPage]);

  const deleteCar = useCallback((id: number) => {
    garageApi.deleteCar(id)
      .then(() => updateCars());
  }, []);

  const setCar = useCallback(({ name, color }: { name: string, color: string}) => {
    garageApi.setCar({ name, color })
      .then(() => updateCars());
  }, []);

  const updateCar = useCallback((car: ICar) => {
    garageApi.updateCar(car)
      .then(() => updateCars());
    setSelectedCar({ name: '', color: '', id: 0 });
  }, []);

  const createGeneratedCars = useCallback(() => {
    Promise.all(generateCars()
      .map((data) => garageApi.setCar({ name: data.name, color: data.color })))
      .then(() => updateCars());
  }, []);

  const selectCar = useCallback(({ name, color, id }: ICar) => {
    setSelectedCar({ name, color, id });
  }, []);

  const updateRaceStatus = useCallback((status: RaceStatus) => {
    setRaceStatus(status);
  }, []);

  return (
    <main className="text-xl">
      <div className="px-2 py-10 shadow-lg" id="controls">
        <Controls
          setCar={setCar}
          selectedCar={selectedCar}
          updateCar={updateCar}
          createGeneratedCars={createGeneratedCars}
          updateRaceStatus={updateRaceStatus}
        />
      </div>
      <div className="px-2 py-10 shadow-lg">
        <Garage
          currentPage={currentPage}
          garageLength={cars.length}
          cars={carsForPage}
          maxPage={maxPage}
          raceStatus={raceStatus}
          deleteCar={deleteCar}
          selectCar={selectCar}
        />
      </div>
    </main>
  );
}

export default GaragePage;
