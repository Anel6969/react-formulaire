import React from "react";

const InputFile = ({ value, onChange, id, type = "text", ...rest }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue, id);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{rest.label}</label>
      <input
        id={id}
        value={value}
        onChange={handleChange}
        type={type}
        {...rest}
      />
    </div>
  );
};

export default InputFile;
