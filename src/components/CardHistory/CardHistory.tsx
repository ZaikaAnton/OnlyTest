import React from "react";
import styled from "styled-components";
import Typography from "../Typography";

interface CardHistoryProps {
  yearEvent: number;
  textEvent: string;
}

const CardHistory = React.memo(({ yearEvent, textEvent }: CardHistoryProps) => {
  return (
    <CardContainer>
      <Typography variant="h3" color="mainBlue">
        {yearEvent}
      </Typography>
      <StyledTypography variant="body2">{textEvent}</StyledTypography>
    </CardContainer>
  );
});

export default CardHistory;

const CardContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(2)};
  max-width: 400px;
  height: 90px;
  overflow: hidden;
`;

const StyledTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
