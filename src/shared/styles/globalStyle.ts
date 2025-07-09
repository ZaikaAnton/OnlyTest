import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-family: Arial, sans-serif;
    background: ${({ theme }) => theme.palette.bgLight};
    color: ${({ theme }) => theme.palette.textDark};
  }
`;
