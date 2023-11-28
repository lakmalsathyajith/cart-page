import styled from '@emotion/styled';

const Heading = styled.h1`
  font-size: 2em;
`;

const SubHeading = styled.h2`
  font-size: 1.5em;
`;

const MinorHeading = styled.h3`
  font-size: 1.2em;
`;

interface StyledLinkProps {
  active: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? '700' : '400')};

  &:hover {
    text-decoration: underline;
  }
`;

export { Heading, SubHeading, MinorHeading, StyledLink };
