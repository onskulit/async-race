import React, { useRef, useState } from 'react';
import styles from '../../Controls.module.css';
import flagImg from '../../../../assets/flag.svg';
import CarLogo from '../../../Logos/CarLogo';
import { ICar } from '../../../../types/interfaces';
import { runRace, cleanRace } from '../../../../utils/races';

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
  const [isMoving, setIsMoving] = useState(false);
  const flagRef = useRef<HTMLImageElement | null>(null);
  const carRef = useRef<HTMLDivElement | null>(null);
  const defaultStartPos = '60px';

  return (
    <div className="relative h-22 px-2 py-2 border-2 rounded-md mb-2">
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
          <button
            type="submit"
            className={`text-lg w-6 ${styles.button} ${!isMoving ? styles.buttonLight : ''}`}
            onClick={() => {
              runRace(car.id, carRef.current!, flagRef.current!.offsetLeft + 40);
              setIsMoving(true);
            }}
            disabled={isMoving}
          >
            A
          </button>
          <button
            type="submit"
            className={`text-lg w-6 ${styles.button} ${isMoving ? styles.buttonLight : ''}`}
            onClick={() => {
              cleanRace(car.id, carRef.current!, defaultStartPos);
              setIsMoving(false);
            }}
            disabled={!isMoving}
          >
            B
          </button>
          <div className="inline-block absolute" style={{ left: defaultStartPos }} ref={carRef}>
            <CarLogo color={car.color} />
          </div>
        </div>
        <img
          src={flagImg}
          className="h-14 mr-20"
          alt="flag-img"
          ref={flagRef}
        />
      </div>
    </div>
  );
}

export default Car;
