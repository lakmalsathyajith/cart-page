import React from 'react';
import type { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';

import styled from '@emotion/styled';

const StyledPage = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 180px auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  background-color: #eaeaeb;

  @media screen and (max-width: 600px) {
    grid-template-areas:
      'header header header'
      'toolbar toolbar toolbar'
      'content content content'
      'footer footer footer';
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 0px;
  }

  main {
    grid-area: content;
    grid-column: span 2;
    margin: 0 12px;
  }
`;

interface PageContainerProps {
  children?: ReactNode;
  onCategoryClick: (id: string) => Promise<void>;
}

const PageContainer = ({
  children,
  onCategoryClick
}: PageContainerProps): JSX.Element => {
  return (
    <StyledPage>
      <Header />
      <SideBar onCategoryClick={onCategoryClick} />
      <main>{children}</main>
      <Footer />
    </StyledPage>
  );
};

export default PageContainer;
