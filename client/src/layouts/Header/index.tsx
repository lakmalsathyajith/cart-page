import React from 'react';

import styled from '@emotion/styled';

const StyledHeader = styled.header`
  grid-area: header;
  background-color: lightblue;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: var(--secondary-color);
  box-shadow: inset 0 -8px 8px -8px rgba(0, 0, 0, 0.2);

  input {
    height: 30px;
    width: 20vw;
    outline: none;
    border-radius: 15px;
  }

  input:active {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    box-shadow: unset;
    border-radius: 0px;
  }
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <strong>home24</strong>
      <input placeholder="Search" />
    </StyledHeader>
  );
};

export default Header;
