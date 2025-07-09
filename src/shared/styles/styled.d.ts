import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      mainBlue: string;
      lightBlue: string;
      pinkError: string;
      bgLight: string;
      textDark: string;
    };
    space: (step: number) => string;
  }
}
