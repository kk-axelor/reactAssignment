import React from "react";

const Input = ({
  text,
  type = "text",
  placeholder = null,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="items">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
