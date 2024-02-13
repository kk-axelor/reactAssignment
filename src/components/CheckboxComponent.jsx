import React from "react";
import styles from "../app.module.css";

const CheckboxComponent = ({
  text,
  type,
  checkboxes,
  onChange,
  sign,
  error = null,
}) => {
  return (
    <div className={styles.items}>
      <label htmlFor=""> {text}</label>
      <div className={styles.listItem}>
        {checkboxes.map((checkbox, i) => (
          <div key={i}>
            <input
              type={type}
              value={checkbox}
              name={checkbox}
              checked={sign.includes(checkbox)}
              onChange={(e) => onChange(e)}
            />
            <span>{checkbox}</span>
          </div>
        ))}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default CheckboxComponent;
