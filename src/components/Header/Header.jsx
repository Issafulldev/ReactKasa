import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from '@/assets/images/LOGO.svg';
import styles from './Header.module.scss';

const NavItem = ({ to, children, isDefaultActive }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => (isActive || isDefaultActive ? styles.active : styles.inactive)}
    >
      {children}
    </NavLink>
  </li>
);

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo du site - Retour à l'accueil" />
      <ul className={styles.navLinks}>
        <NavItem to="/" isDefaultActive={isHomePage}>Accueil</NavItem>
        <NavItem to="/propos">À propos</NavItem>
      </ul>
    </header>
  );
};

export default Header;