import React from "react";

const SelectComponent = ({ text, name, options, data, handleInput }) => {
  return (
    <div className="items">
      <label htmlFor="">{text}</label>
      <select name="webserver" value={data} onChange={(e) => handleInput(e)}>
        {options.map((option, i) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
