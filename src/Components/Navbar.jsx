import React from "react";
import styles from "../Styles/navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navlink}>
          <NavLink to="/" activeclassName={styles.active}>
            Home{" "}
          </NavLink>
          <NavLink to="/protected" activeclassName="active">
            Protected
          </NavLink>
        </div>
        <div className={styles.navlink}>
          <NavLink to="/login" activeclassName="active">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
