import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" end>
        Home
      </NavLink>
      <NavLink to="/catalog" className="nav-link">
        Catalog
      </NavLink>
      <NavLink to="/calculator" className="nav-link">
        Calculator
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
