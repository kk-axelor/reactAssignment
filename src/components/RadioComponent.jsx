import React from "react";

const RadioComponent = ({ text, type, name, radios, data, onChange }) => {
  return (
    <div className="items">
      <label htmlFor="">{text}</label>
      <div className="list-item">
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
      </div>
    </div>
  );
};

export default RadioComponent;
