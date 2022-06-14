import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Navbar = () => (
  <div className="h-100" id="side-bar">
    <nav className="h-100 py-4 d-flex flex-column">
      <NavLink className="navbar-brand fw-normal pb-4" to="/">
        <img src="/images/free-logo-removebg-preview.png" alt="..." className="w-100" />
      </NavLink>
      <ul className="nav nav-pills nav-fill flex-column ms-3">
        <li className="nav-item pt-3 pb-2">
          <NavLink className="nav-link active" aria-current="page" to="/">Courses</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/Register">Registoter</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li>
        <li className="nav-item pb-2">
          <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
