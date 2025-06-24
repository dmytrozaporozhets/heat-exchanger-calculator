import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" end>Главная</NavLink>
      <NavLink to="/catalog" className="nav-link">Каталог</NavLink>
      <NavLink to="/calculator" className="nav-link">Калькулятор</NavLink>
      <NavLink to="/about" className="nav-link">О проекте</NavLink>
    </nav>
  );
};

export default Navbar;
