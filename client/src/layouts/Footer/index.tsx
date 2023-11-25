import React from 'react';

import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: lightblue;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    box-shadow: unset;
    border-radius: 0px;
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </StyledFooter>
  );
};

export default Footer;
