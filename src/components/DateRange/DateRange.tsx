import React from "react";
import styled from "styled-components";
import Typography from "../Typography";

import { useAnimatedNumber } from "@/shared/hooks/useAnimatedNumber";

interface DateRangeProps {
  firstYear: number;
  lastYear: number;
}

const DateRange = React.memo(({ firstYear, lastYear }: DateRangeProps) => {
  const animatedFirstYear = useAnimatedNumber(firstYear);
  const animatedLastYear = useAnimatedNumber(lastYear);

  return (
    <Container>
      <Typography variant="h1" color="lightBlue">
        {animatedFirstYear}
      </Typography>

      <Typography variant="h1" color="mainPink">
        {animatedLastYear}
      </Typography>
    </Container>
  );
});

export default DateRange;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(10)};
`;
