import React from 'react';
import styles from '../../Controls.module.css';

function Reset() {
  return (
    <button type="submit" className={`${styles.button} ${styles.buttonColored} w-24`}>
      Reset
    </button>
  );
}

export default Reset;
