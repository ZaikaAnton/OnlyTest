import styled, { css } from "styled-components";
import React, { ReactNode } from "react";

interface ButtonEllipseProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonEllipse = React.memo(
  ({ children, onClick, disabled = false }: ButtonEllipseProps) => {
    return (
      <StyledButton
        onClick={disabled ? undefined : onClick}
        $disabled={disabled}
        aria-disabled={disabled}
      >
        {children}
      </StyledButton>
    );
  }
);

export default ButtonEllipse;

const StyledButton = styled.button<{ $disabled?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.textDark};
  background-color: ${({ theme }) => theme.palette.bgLight};
  color: ${({ theme }) => theme.palette.textDark};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.hoverEllipse};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      border-color: ${theme.palette.disabledColor};
      color: ${theme.palette.disabledColor};
      cursor: default;
      pointer-events: none;
    `}
`;
