import React from "react";

import "./navigation.styles.scss";

const Navigation = () => (
  <nav className="navbar">
    <ul>
      <li>
        <a class="nav-link scrollto active" href="#hero">
          Home
        </a>
      </li>
      <li>
        <a class="nav-link scrollto" href="#about">
          About
        </a>
      </li>
      <li>
        <a class="nav-link scrollto " href="#work">
          Work
        </a>
      </li>
      <li>
        <a class="nav-link scrollto" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
