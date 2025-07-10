export type ThemeColor = keyof typeof theme.palette;
export type TypographyVariant = keyof typeof typography;

const baseSpace = 8;

const palette = {
  mainBlue: "#3877EE",
  lightBlue: "#5D5FEF",
  mainPink: "#EF5DA8",
  bgLight: "#FFFFFF",
  textDark: "#42567A",
  hoverEllipse: "#FFFFF0",
  disabledColor: "#D9D9D9",
  mainBlueToPinkGradient: "linear-gradient(0deg, #EF5DA8 0%, #3877EE 100%)",
};

const space = (y: number, x?: number) => {
  if (x !== undefined) {
    return `${baseSpace * y}px ${baseSpace * x}px`;
  }
  return `${baseSpace * y}px`;
};

export const typography = {
  h1: {
    fontSize: "200px",
    fontWeight: 700,
  },
  h2: {
    fontSize: "56px",
    fontWeight: 700,
  },
  h3: {
    fontSize: "25px",
    fontWeight: 400,
  },
  body1: {
    fontSize: "20px",
    fontWeight: 700,
  },
  body2: {
    fontSize: "20px",
    fontWeight: 400,
  },
  button: {
    fontSize: "14px",
    fontWeight: 400,
  },
} as const;

export const theme = {
  palette,
  space,
  typography,
};
