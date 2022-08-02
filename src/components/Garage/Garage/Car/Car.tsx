import React from 'react';
import styles from '../../Controls.module.css';
import flagImg from '../../../../assets/flag.svg';
import CarLogo from '../../../Logos/CarLogo';
import { ICar } from '../../../../types/interfaces';

interface CarProps {
  car: ICar;
  deleteCar: (id: number) => void;
  selectCar({ name, color, id }: ICar): void;
}

function Car({
  car,
  deleteCar,
  selectCar,
}: CarProps) {
  return (
    <div className="h-22 px-2 py-2 border-2 rounded-md mb-2">
      <div className="flex gap-2 mb-2 items-center">
        <button
          type="submit"
          className={`text-lg w-20 ${styles.button} ${styles.buttonGreen}`}
          onClick={() => selectCar(car)}
        >
          <a href="#controls">Select</a>
        </button>
        <button
          type="submit"
          className={`text-lg w-20 ${styles.button} ${styles.buttonRed}`}
          onClick={() => deleteCar(car.id)}
        >
          Remove
        </button>
        <h3 className="text-lg">
          {car.name}
        </h3>
      </div>
      <div className="flex justify-between border-b-4 border-slate-400 border-dashed pt-1">
        <div className="flex gap-1">
          <button type="submit" className={`text-lg w-6 ${styles.button} ${styles.buttonLight}`}>A</button>
          <button type="submit" className={`text-lg w-6 ${styles.button} ${styles.buttonLight}`}>B</button>
          <CarLogo color={car.color} />
        </div>
        <img src={flagImg} className="h-14 mr-20" alt="flag-img" />
      </div>
    </div>
  );
}

export default Car;
