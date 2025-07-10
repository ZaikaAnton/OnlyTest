import { forwardRef } from "react";
import styled from "styled-components";

interface CircleProps {
  className?: string;
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(({ className }, ref) => {
  return <StyledCircle ref={ref} className={className} />;
});

export default Circle;

const StyledCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  aspect-ratio: 1;
  max-width: 530px;
  max-height: 530px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.textDark};
  background-color: transparent;
  opacity: 0.3;
`;
