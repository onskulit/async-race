import React from 'react';
import styles from '../../Controls.module.css';

function GenerateCars() {
  return (
    <button type="submit" className={`grow min-w-24 ${styles.button} ${styles.buttonLight} w-24`}>
      Generate cars
    </button>
  );
}

export default GenerateCars;
