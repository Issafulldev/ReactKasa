import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '@/assets/images/LOGO.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo du site" />
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/propos"
            className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;