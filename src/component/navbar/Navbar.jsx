import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <h1 className="left">STANLEY</h1>

        <ul>
          <li>
            <a href="#service">WORK</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
