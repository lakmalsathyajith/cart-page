import React from 'react';
import type { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 0.2em;
  background-color: lightgoldenrodyellow;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
  width: 100%;
  border-radius: 4px;
  background-color: #02a867;
  color: #fff;
  padding: 6px;

  &:hover {
    background-color: #2980b9;
  }
`;

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => Event;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
