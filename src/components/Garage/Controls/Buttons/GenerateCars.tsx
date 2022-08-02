import React from 'react';
import styles from '../../Controls.module.css';

interface GenerateCarsProps {
  createGeneratedCars(): void;
}
function GenerateCars({ createGeneratedCars }: GenerateCarsProps) {
  return (
    <button
      type="submit"
      className={`grow min-w-24 ${styles.button} ${styles.buttonLight} w-24`}
      onClick={createGeneratedCars}
    >
      Generate cars
    </button>
  );
}

export default GenerateCars;
