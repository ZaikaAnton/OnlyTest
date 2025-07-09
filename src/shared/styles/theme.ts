const baseSpace = 8;

export const palette = {
  mainBlue: "#3877EE",
  lightBlue: "#5D5FEF",
  pinkError: "#EF5DA8",
  bgLight: "#fff",
  textDark: "#42567A",
};

export const space = (step: number) => `${baseSpace * step}px`;

export const theme = {
  palette,
  space,
};
