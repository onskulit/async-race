import React from 'react';
import Car from './Car/Car';
import { ICar } from '../../../types/interfaces';

interface GarageProps {
  cars: ICar[];
  deleteCar(id: number): void;
  selectCar({ name, color, id }: ICar): void;
}

function Garage({ cars, deleteCar, selectCar }: GarageProps) {
  return (
    <div>
      <h2 className="text-2xl flex justify-center mb-4">
        Garage
        {` (${cars.length})`}
      </h2>
      <div className="px-5">
        { cars.map(((car) => (
          <Car
            car={car}
            key={car.id}
            deleteCar={deleteCar}
            selectCar={selectCar}
          />
        )
        ))}
      </div>
    </div>
  );
}

export default Garage;
