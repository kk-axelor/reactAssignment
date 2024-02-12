import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState("fetch");

  const handleClick = (value) => {
    setActive(value);
  };

  return (
    <nav>
      <NavLink
        onClick={() => handleClick("fetch")}
        className={active === "fetch" ? styles.active : ""}
        to="/"
      >
        Fetch using Fetch API
      </NavLink>
      <NavLink
        onClick={() => handleClick("axios")}
        className={active === "axios" ? styles.active : ""}
        to="/usingAxios"
      >
        Fetch using Axios
      </NavLink>
    </nav>
  );
};

export default Navbar;
