import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../images/free-logo-removebg-preview.png';

const Navbar = () => (
  <div className="h-100" id="side-bar">
    <nav className="h-100 py-4 d-flex flex-column ms-3">
      <NavLink className="navbar-brand fw-normal pb-4 w-100" to="/">
        <img src={logo} alt="..." className="w-100" />
      </NavLink>
      <ul className="nav nav-pills nav-fill flex-column">
        <li className="nav-item pt-3 pb-2">
          <NavLink className="nav-link" to="/">Courses</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/link">Link</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/link">Link</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/link">Link</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link disabled" to="/link" tabIndex="-1" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
