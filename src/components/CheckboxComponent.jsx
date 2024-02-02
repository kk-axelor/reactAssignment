import React from "react";

const CheckboxComponent = ({
  text,
  type,
  name,
  checkboxes,
  handleCheckbox,
  sign,
}) => {
  return (
    <div className="items">
      <label htmlFor=""> {text}</label>
      <div className="list-item">
        {checkboxes.map((checkbox, i) => (
          <div>
            <input
              type={type}
              value={checkbox}
              name={name}
              checked={sign.includes(checkbox)}
              onChange={(e) => handleCheckbox(e)}
            />
            <span>{checkbox}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxComponent;
