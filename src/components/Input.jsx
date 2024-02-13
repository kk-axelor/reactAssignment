import React from "react";
import styles from "../app.module.css";

const Input = ({
  text,
  type = "text",
  placeholder = null,
  name,
  value,
  onChange,
  error = null,
}) => {
  return (
    <div className={styles.items}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
