import styled from "styled-components";
import { ReactNode } from "react";
import React from "react";

interface PageContentProps {
  children: ReactNode;
}

const PageContent = React.memo(({ children }: PageContentProps) => {
  return <Container>{children}</Container>;
});

export default PageContent;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.bgLight};
  min-height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.palette.textDark};
  border-right: 1px solid ${({ theme }) => theme.palette.textDark};
`;
