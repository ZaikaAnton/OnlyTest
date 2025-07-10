import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      mainBlue: string;
      lightBlue: string;
      mainPink: string;
      bgLight: string;
      textDark: string;
      hoverEllipse: string;
      disabledColor: string;
      mainBlueToPinkGradient;
    };
    space: {
      (y: number): string;
      (y: number, x: number): string;
    };
    typography: {
      h1: {
        fontSize: string;
        fontWeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
      };
      body1: {
        fontSize: string;
        fontWeight: number;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
      };
      button: {
        fontSize: string;
        fontWeight: number;
      };
    };
  }
}
