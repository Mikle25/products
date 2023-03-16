import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import styled from "styled-components";

type TSize = "s" | "m";

type TStyleButtonProps = {
  size: TSize;
  disabled: boolean;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handlerButton?: MouseEventHandler<HTMLButtonElement>;
  name: string;
  size?: TSize;
}

const CustomButton = styled.button<TStyleButtonProps>`
  //color: ${({ theme }) => theme.colors.primaryDefaultButton};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.primaryDefaultButton : theme.colors.defaultErrorText};
  width: ${({ theme, size }) => theme.size.button[size]};
  height: 100%;
  border-radius: 5px;
`;

const Button: FC<ButtonProps> = ({
  value,
  handlerButton,
  name,
  type = "button",
  size = "m",
}) => {
  return (
    <CustomButton
      size={size}
      type={type}
      onClick={handlerButton}
      disabled={!value}
    >
      {name}
    </CustomButton>
  );
};

export default Button;
