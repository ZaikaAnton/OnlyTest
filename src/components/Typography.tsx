import styled from "styled-components";
import React, { forwardRef, ReactNode } from "react";
import { ThemeColor, TypographyVariant } from "@/shared/styles/theme";

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: ThemeColor;
  className?: string;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, variant = "body1", color = "textDark", className }, ref) => {
    return (
      <TextElement
        ref={ref}
        className={className}
        $variant={variant}
        $color={color}
      >
        {children}
      </TextElement>
    );
  }
);

export default React.memo(Typography);

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
