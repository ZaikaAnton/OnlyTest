import styled, { css } from "styled-components";
import React, { forwardRef, ReactNode } from "react";

interface ButtonEllipseProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ButtonEllipse = forwardRef<HTMLButtonElement, ButtonEllipseProps>(
  ({ children, onClick, disabled = false, className }, ref) => {
    return (
      <StyledButton
        ref={ref}
        onClick={disabled ? undefined : onClick}
        $disabled={disabled}
        aria-disabled={disabled}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default React.memo(ButtonEllipse);

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
