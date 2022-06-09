import React from 'react';
import { Navlink } from 'react-router-dom';
import ""

const Navbar = () => (
  <div class="h-100" id="side-bar">
    <nav class="h-100 py-4 d-flex flex-column" >
      <Navlink class="navbar-brand fw-normal pb-4" href="#">
        <img src="/images/free-logo-removebg-preview.png" alt="..." class="w-100" />
      </Navlink>
      <ul class="nav nav-pills nav-fill flex-column ms-3">
        <li class="nav-item pt-3 pb-2">
          <Navlink class="nav-link active" aria-current="page" href="#">Active</Navlink>
        </li>
        <li class="nav-item pb-2">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li class="nav-item pb-2">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li class="nav-item pb-2">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li class="nav-item pb-2">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li class="nav-item pb-2">
          <Navlink class="nav-link" href="#">Link</Navlink>
        </li>
        <li class="nav-item pb-2">
          <Navlink class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Navlink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
