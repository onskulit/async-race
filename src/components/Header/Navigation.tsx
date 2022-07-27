import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Navigation() {
  const setLinkStyles = ({ isActive }: { isActive: boolean }) => (isActive
    ? `${styles.navItem} ${styles.navItemActive}`
    : `${styles.navItem}`);
  return (
    <span className="flex gap-2">
      <NavLink to="/" className={setLinkStyles}>
        Garage
      </NavLink>
      <NavLink to="/winners" className={setLinkStyles}>
        Winners
      </NavLink>
    </span>
  );
}

export default Navigation;
