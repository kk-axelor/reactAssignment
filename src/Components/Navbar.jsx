import React, { useContext } from "react";
import styles from "../Styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import { userContext } from "../context/userContext";

const Navbar = () => {
  const { user, dispatch } = useContext(userContext);

  const handleLogout = () => {
    dispatch({ type: "REMOVE_USER" });
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navlink}>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/protected">Protected</NavLink>
        </div>
        <div className={styles.navlink}>
          {user === null ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink onClick={handleLogout}>Logout</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
