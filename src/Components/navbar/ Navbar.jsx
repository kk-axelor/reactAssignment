import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { navlink } from "../../constants";
const Navbar = () => {
  const [active, setActive] = useState("fetch");

  const handleClick = (value) => {
    setActive(value);
  };

  return (
    <nav>
      {navlink.map((link) => (
        <NavLink
          key={link.id}
          onClick={() => handleClick(link.name)}
          className={active === link.name ? styles.active : ""}
          to={link.to}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
