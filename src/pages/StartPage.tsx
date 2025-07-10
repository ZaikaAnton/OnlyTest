import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import PageContent from "@/components/PageContent";
import { useCallback } from "react";
import { ROUTES } from "@/shared/model/routes";
import { styled } from "styled-components";

const StartPage = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(ROUTES.HISTORY);
  }, [navigate]);

  return (
    <PageContent>
      <CenteredContainer>
        <Button onClick={handleClick}>Просмотр</Button>
      </CenteredContainer>
    </PageContent>
  );
};

export default StartPage;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
