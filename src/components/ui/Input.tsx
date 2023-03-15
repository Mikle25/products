import React, { FC } from "react";

type IInputProps = {
  value: string;
  handleChange: (value: string) => void;
};

const Input: FC<IInputProps> = ({value, handleChange}) => {
  return (
    <input
      type="text"
      className="border p-2"
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      placeholder="Enter product name"
      // autoFocus={true}
    />
  );
};

export default Input;
