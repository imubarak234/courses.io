import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Mobile = () => (
  <nav className="navbar navbar-light bg-light">
    <NavLink className="navbar-brand d-flex" to="/">
      <img src="./images/free-logo-removebg-preview.png" alt=".." className="images" />
      <p className="align-self-center pt-2">Courses.IO</p>
    </NavLink>

    <button type="button"><img src="./images/list.svg" alt="list" /></button>
  </nav>
);

export default Mobile;
