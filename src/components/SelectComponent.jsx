import React from "react";

const SelectComponent = ({ text, name, options, data, onChange }) => {
  return (
    <div className="items">
      <label htmlFor="">{text}</label>
      <select name="webserver" value={data} onChange={(e) => onChange(e)}>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
