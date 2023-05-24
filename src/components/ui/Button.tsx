import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import styled from "styled-components";

type TSize = "s" | "m" | 'l';

type TStyleButtonProps = {
  size: TSize;
  disabled: boolean;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handlerButton?: MouseEventHandler<HTMLButtonElement>;
  name: string;
  size?: TSize;
  disabled?: boolean;
}

const CustomButton = styled.button<TStyleButtonProps>`
  //color: ${({ theme }) => theme.colors.primaryDefaultButton};
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.defaultErrorText
      : theme.colors.primaryDefaultButton};
  width: ${({ theme, size }) => theme.size.button[size]};
  height: 100%;
  border-radius: 5px;
`;

const Button: FC<ButtonProps> = ({
  handlerButton,
  name,
  type = "button",
  size = "m",
  disabled = false,
}) => {
  return (
    <CustomButton
      size={size}
      type={type}
      onClick={handlerButton}
      disabled={disabled}
    >
      {name}
    </CustomButton>
  );
};

export default Button;
