import styled from "styled-components";
import React, { ReactNode } from "react";
import { ThemeColor, TypographyVariant } from "@/shared/styles/theme";

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: ThemeColor;
}

const Typography = React.memo(
  ({ children, variant = "body1", color = "textDark" }: TypographyProps) => {
    return (
      <TextElement $variant={variant} $color={color}>
        {children}
      </TextElement>
    );
  }
);

export default Typography;

const TextElement = styled.p<{
  $variant: TypographyVariant;
  $color: ThemeColor;
}>`
  color: ${({ theme, $color }) => theme.palette[$color]};

  ${({ $variant, theme }) => {
    return `
      font-size: ${theme.typography[$variant].fontSize};
      font-weight: ${theme.typography[$variant].fontWeight};
    `;
  }}
`;
