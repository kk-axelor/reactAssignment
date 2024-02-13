import React from "react";
import styles from "../app.module.css";
const RadioComponent = ({
  text,
  type,
  name,
  radios,
  data,
  onChange,
  error,
}) => {
  return (
    <div className={styles.items}>
      <label htmlFor="">{text}</label>
      <div className={styles.listItem}>
        {radios.map((radio, i) => (
          <div key={i}>
            <input
              type={type}
              name={name}
              value={radio}
              checked={data === radio}
              onChange={(e) => onChange(e)}
            />
            <span>{radio}</span>
          </div>
        ))}

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default RadioComponent;
