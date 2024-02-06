import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Fetch using Fetch API</NavLink>
      <NavLink to="/usingAxios">Fetch using Axios</NavLink>
    </nav>
  );
};

export default Navbar;
