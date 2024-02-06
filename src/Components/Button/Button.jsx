import React from "react";
import styles from "./button.module.css";

const Button = ({ text, bgColor = "teal", onClick }) => {
  return (
    <button style={{ backgroundColor: bgColor }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
