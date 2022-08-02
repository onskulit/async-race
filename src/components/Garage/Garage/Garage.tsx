import React from 'react';
import Car from './Car/Car';
import { ICar } from '../../../types/interfaces';

interface GarageProps {
  cars: ICar[];
  deleteCar(id: number): void;
}

function Garage({ cars, deleteCar }: GarageProps) {
  return (
    <div>
      <h2 className="text-2xl flex justify-center mb-4">
        Garage
        {` (${cars.length})`}
      </h2>
      <div className="px-5">
        { cars.map(((car) => (
          <Car
            name={car.name}
            color={car.color}
            id={car.id}
            key={car.id}
            deleteCar={deleteCar}
          />
        )
        ))}
      </div>
    </div>
  );
}

export default Garage;
