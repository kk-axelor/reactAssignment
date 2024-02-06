import React from "react";
import Navbar from "../Components/navbar/ Navbar";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
