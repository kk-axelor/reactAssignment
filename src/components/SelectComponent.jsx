import React from "react";
import styles from "../app.module.css";

const SelectComponent = ({
  text,
  name,
  options,
  data,
  onChange,
  error = null,
}) => {
  return (
    <div className={styles.items}>
      <label htmlFor="">{text}</label>
      <select name="webserver" value={data} onChange={(e) => onChange(e)}>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SelectComponent;
