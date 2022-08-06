import React from 'react';
import { RaceStatus } from '../../../types/enums';
import { ICar } from '../../../types/interfaces';
import GenerateCars from './Buttons/GenerateCars';
import Race from './Buttons/Race';
import Reset from './Buttons/Reset';
import Create from './Create/Create';
import Update from './Update/Update';

interface ControlsProps {
  selectedCar: ICar;
  setCar({ name, color }: { name: string, color: string}): void;
  updateCar(car: ICar): void;
  createGeneratedCars(): void;
  updateRaceStatus(status: RaceStatus): void;
}
function Controls({
  setCar,
  selectedCar,
  updateCar,
  createGeneratedCars,
  updateRaceStatus,
}: ControlsProps) {
  return (
    <div className="w-[360px] flex flex-col mb-3 mx-auto text-lg">
      <Create setCar={setCar} />
      <Update selectedCar={selectedCar} updateCar={updateCar} />
      <div className="flex items-center gap-2">
        <Race updateRaceStatus={updateRaceStatus} />
        <Reset updateRaceStatus={updateRaceStatus} />
        <GenerateCars createGeneratedCars={createGeneratedCars} />
      </div>
    </div>
  );
}

export default Controls;
