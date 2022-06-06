import React from 'react';
import { Navlink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <Navlink>
        <img src="" alt="" />
      </Navlink>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Navlink class="nav-link active" aria-current="page" href="#">Active</Navlink>
        </li>
        <li className="nav-item">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li className="nav-item">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li className="nav-item">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li className="nav-item">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li className="nav-item">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li className="nav-item">
          <Navlink class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Navlink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
