import React from "react";

const RadioComponent = ({ text, type, name, radios, data, handleInput }) => {
  return (
    <div className="items">
      <label htmlFor="">{text}</label>
      <div className="list-item">
        {radios.map((radio, i) => (
          <div>
            <input
              type={type}
              name={name}
              value={radio}
              checked={data === radio}
              onChange={(e) => handleInput(e)}
            />
            <span>Admin</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioComponent;
