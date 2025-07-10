import styled from "styled-components";
import Typography from "../Typography";

const HeaderText = () => {
  return (
    <Container>
      <GradientBar />
      <Typography variant="h2">
        Исторические <br /> даты
      </Typography>
    </Container>
  );
};

export default HeaderText;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(10)};
  height: fit-content;
`;

const GradientBar = styled.div`
  width: 5px;
  align-self: stretch;
  background: ${({ theme }) => theme.palette.mainBlueToPinkGradient};
  margin: ${({ theme }) => theme.space(1, 0)};
`;
