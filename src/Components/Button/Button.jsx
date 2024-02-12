import React from "react";
import styles from "./button.module.css";

const Button = ({ children, bgColor = "teal", onClick }) => {
  return (
    <button style={{ backgroundColor: bgColor }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
