import React, { FC } from "react";

type IInputProps = {
  value?: string;
  handleChange: (value: string) => void;
};

const Input: FC<IInputProps> = ({ value, handleChange, ...rest }) => {
  return (
    <input
      type="text"
      className="border p-2 bg-transparent border-radius"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      value={value}
      placeholder="Название продукта"
      // autoFocus={true}
      {...rest}
    />
  );
};

export default Input;
