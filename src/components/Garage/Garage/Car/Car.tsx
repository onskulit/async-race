import React from 'react';
import styles from '../../Controls.module.css';
import carImg from '../../../../assets/car.svg';
import flagImg from '../../../../assets/flag.svg';

function Car() {
  return (
    <div className="h-22 px-2 py-2 border-2 rounded-md mb-2">
      <div className="flex gap-2 mb-2 items-center">
        <button type="submit" className={`text-lg w-20 ${styles.button} ${styles.buttonGreen}`}>Select</button>
        <button type="submit" className={`text-lg w-20 ${styles.button} ${styles.buttonRed}`}>Remove</button>
        <h3 className="text-lg">Car Name</h3>
      </div>
      <div className="flex justify-between border-b-4 border-slate-400 border-dashed pt-1">
        <div className="flex gap-1">
          <button type="submit" className={`text-lg w-6 ${styles.button} ${styles.buttonLight}`}>A</button>
          <button type="submit" className={`text-lg w-6 ${styles.button} ${styles.buttonLight}`}>B</button>
          <img src={carImg} className="h-14" alt="car-img" />
        </div>
        <img src={flagImg} className="h-14 mr-20" alt="car-img" />
      </div>
    </div>
  );
}

export default Car;
