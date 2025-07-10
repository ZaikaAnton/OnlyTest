import styled from "styled-components";
import React, { ReactNode, useMemo } from "react";
import Typography from "../Typography";
import ButtonEllipse from "../ButtonEllipse";

interface GroupedButtonsProps {
  currentIndex: number;
  itemsLength: number;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const GroupedButtons = React.memo(
  ({
    currentIndex,
    itemsLength,
    onPrevClick,
    onNextClick,
    prevDisabled = false,
    nextDisabled = false,
  }: GroupedButtonsProps) => {
    const formattedTitle = useMemo(() => {
      return `${String(currentIndex + 1).padStart(2, "0")}/${String(
        itemsLength
      ).padStart(2, "0")}`;
    }, [currentIndex, itemsLength]);

    return (
      <Container>
        <Typography variant="button">{formattedTitle}</Typography>

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
  z-index: 1;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space(2.5)};
  width: 100%;
`;
