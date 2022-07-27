import React from 'react';
import styles from './Header.module.css';

function Navigation() {
  return (
    <span className="delay-0.3">
      <span className={`${styles.navItem} mr-2`}>Garage</span>
      <span className={styles.navItem}>Winners</span>
    </span>
  );
}

export default Navigation;
