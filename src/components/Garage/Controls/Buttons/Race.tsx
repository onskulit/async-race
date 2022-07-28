import React from 'react';
import styles from '../Controls.module.css';

function Race() {
  return (
    <button type="submit" className={`${styles.button} ${styles.buttonColored} w-24`}>
      Race
    </button>
  );
}

export default Race;
