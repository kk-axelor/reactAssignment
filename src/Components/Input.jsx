import React from "react";
import styles from "../Styles/login.module.css";

const Input = ({ text, name, value, type = "text", onChange, placeholder }) => {
  return (
    <div className={styles.input}>
      <label htmlFor="">{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
