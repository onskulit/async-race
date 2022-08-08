import React, { useContext } from 'react';
import Car from './Car/Car';
import { ICar } from '../../../types/interfaces';
import { GaragePageContext } from '../../../contexts/context';
import { RaceStatus } from '../../../types/enums';
import PaginatedComponent from '../../PaginatedComponent/PaginatedComponent';

interface GarageProps {
  currentPage: number,
  garageLength: number;
  cars: ICar[];
  maxPage: number;
  raceStatus: RaceStatus;
  deleteCar(id: number): void;
  selectCar({ name, color, id }: ICar): void;
}

function Garage({
  currentPage,
  garageLength,
  cars,
  maxPage,
  raceStatus,
  deleteCar,
  selectCar,
}: GarageProps) {
  const { updatePage } = useContext(GaragePageContext);
  return (
    <div>
      <h2 className="text-2xl flex justify-center mb-4">
        Garage
        {garageLength !== 0 && ` (${garageLength})`}
      </h2>
      <PaginatedComponent currentPage={currentPage} maxPage={maxPage} updatePage={updatePage!}>
        <div className="px-5">
          { cars.map(((car) => (
            <Car
              car={car}
              key={car.id}
              deleteCar={deleteCar}
              selectCar={selectCar}
              raceStatus={raceStatus}
            />
          )
          ))}
        </div>
      </PaginatedComponent>
    </div>
  );
}

export default Garage;
