import React from "react";

const CheckboxComponent = ({ text, type, checkboxes, onChange, sign }) => {
  return (
    <div className="items">
      <label htmlFor=""> {text}</label>
      <div className="list-item">
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
      </div>
    </div>
  );
};

export default CheckboxComponent;
