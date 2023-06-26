import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { Component } from "../../modules/components";

type TSize = "s" | "m" | "l" | undefined;

type TStyleButtonProps = {
  size: TSize;
};

type ButtonComponent = Component<
  "button",
  {
    handlerButton?: MouseEventHandler<HTMLButtonElement>;
    name: string;
    size?: TSize;
  }
>;

const CustomButton = styled.button<TStyleButtonProps>`
  //color: ${({ theme }) => theme.colors.primaryDefaultButton};
  background-color: ${({ theme }) => theme.colors.primaryDefaultButton};
  width: ${({ theme, size }) =>
    size ? theme.size.button[size] : "fit-content"};
  height: 100%;
  padding: 0 5px;
  border-radius: 5px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.defaultGrey};
    cursor: not-allowed;
  }
`;

const Button: ButtonComponent = ({
  handlerButton,
  name,
  size,
  ...rest
}) => {
  return (
    <CustomButton size={size} onClick={handlerButton} {...rest}>
      {name}
    </CustomButton>
  );
};

export default Button;
