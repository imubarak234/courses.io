import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../images/free-logo-removebg-preview.png';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import messenger from '../images/messenger.svg';
import whatsapp from '../images/whatsapp.svg';
import mail from '../images/envelope.svg';
import linkedin from '../images/linkedin.svg';

const Navbar = () => (
  <div className="h-100" id="side-bar">
    <nav className="h-100 pt-4 d-flex flex-column ms-3">
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

      <div id="side-bar-socials" className="px-3 mt-3">
        <div className="d-flex justify-content-center">
          <NavLink to="#">
            <img src={mail} alt="mail" />
          </NavLink>
          <NavLink to="#">
            <img src={facebook} alt="facebook" />
          </NavLink>
          <NavLink to="#">
            <img src={linkedin} alt="linkedin" />
          </NavLink>
          <NavLink to="#">
            <img src={messenger} alt="messenger" />
          </NavLink>
          <NavLink to="#">
            <img src={whatsapp} alt="whatsapp" />
          </NavLink>
          <NavLink to="#">
            <img src={twitter} alt="twitter" />
          </NavLink>
        </div>
        <p>Copyright © 2022 Mubarak.</p>
      </div>
    </nav>
  </div>
);

export default Navbar;
