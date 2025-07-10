import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

interface LineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const horizontalStyle = css`
  width: 100%;
  height: 1px;
`;

const verticalStyle = css`
  width: 1px;
  height: 100%;
`;

const Line = forwardRef<HTMLDivElement, LineProps>(
  ({ orientation = "horizontal", className }, ref) => {
    return (
      <StyledLine ref={ref} className={className} $orientation={orientation} />
    );
  }
);

export default Line;

const StyledLine = styled.div<{ $orientation: "horizontal" | "vertical" }>`
  background-color: ${({ theme }) => theme.palette.textDark};
  opacity: 0.3;

  ${({ $orientation }) =>
    $orientation === "vertical" ? verticalStyle : horizontalStyle}
`;
