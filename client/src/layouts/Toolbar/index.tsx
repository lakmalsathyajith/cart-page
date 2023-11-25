import React from 'react';
import styled from '@emotion/styled';

const StyledToolbar = styled.section`
  display: none;
  @media screen and (max-width: 600px) {
    grid-area: toolbar;
    background-color: lightblue;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0;
    width: 100%;
    box-shadow: inset 0 -8px 8px -8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
`;
const Toolbar = () => {
  return (
    <StyledToolbar>
      <strong></strong>
    </StyledToolbar>
  );
};

export default Toolbar;
