import styled from "styled-components";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = React.memo(({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
});

export default Button;

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.space(1)};
  background-color: ${({ theme }) => theme.palette.mainBlue};
  color: ${({ theme }) => theme.palette.bgLight};
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.lightBlue};
  }
`;
