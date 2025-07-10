import styled from "styled-components";
import React, { ReactNode } from "react";
import Typography from "../Typography";
import ButtonEllipse from "../ButtonEllipse";

interface GroupedButtonsProps {
  title: string;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const GroupedButtons = React.memo(
  ({
    title,
    onPrevClick,
    onNextClick,
    prevDisabled = false,
    nextDisabled = false,
  }: GroupedButtonsProps) => {
    return (
      <Container>
        {/* <TitleWrapper> */}
        <Typography variant="button">{title}</Typography>
        {/* </TitleWrapper> */}

        <ButtonsWrapper>
          <ButtonEllipse onClick={onPrevClick} disabled={prevDisabled}>
            &lt;
          </ButtonEllipse>
          <ButtonEllipse onClick={onNextClick} disabled={nextDisabled}>
            &gt;
          </ButtonEllipse>
        </ButtonsWrapper>
      </Container>
    );
  }
);

export default GroupedButtons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(2.5)};
  width: fit-content;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space(2.5)};
  width: 100%;
`;

// const TitleWrapper = styled.div`
//   align-self: flex-end;
// `;
