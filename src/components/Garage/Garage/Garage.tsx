import React, { useContext } from 'react';
import Car from './Car/Car';
import { ICar } from '../../../types/interfaces';
import buttonStyles from '../Controls.module.css';
import { GaragePageContext } from '../../../contexts/context';
import { DecOrInc } from '../../../types/enums';

interface GarageProps {
  currentPage: number,
  garageLength: number;
  cars: ICar[];
  maxPage: number;
  deleteCar(id: number): void;
  selectCar({ name, color, id }: ICar): void;
}

function Garage({
  currentPage,
  garageLength,
  cars,
  maxPage,
  deleteCar,
  selectCar,
}: GarageProps) {
  const { updatePage } = useContext(GaragePageContext);
  return (
    <div>
      <h2 className="text-2xl flex justify-center mb-4">
        Garage
        {` (${garageLength})`}
      </h2>
      <h4 className="text-lg flex justify-center mb-4">
        Page #
        {currentPage}
      </h4>
      <div className="px-5 mb-4">
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
      <div className="flex justify-center gap-4">
        <button
          type="submit"
          className={`${buttonStyles.button} ${currentPage === 1 ? '' : buttonStyles.buttonLight} w-20`}
          onClick={() => updatePage!(DecOrInc.decrement)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          type="submit"
          className={`${buttonStyles.button} ${currentPage === maxPage ? '' : buttonStyles.buttonLight} w-20`}
          onClick={() => updatePage!(DecOrInc.increment)}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Garage;
