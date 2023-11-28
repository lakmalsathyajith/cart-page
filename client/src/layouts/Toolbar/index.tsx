import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Filter } from '@emotion-icons/octicons';

const iconStyles = css`
  width: 18px;
  height: 18px;
  margin: 0 8px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

// Style the Octicons using the styled function
const StyledFilter = styled(Filter)`
  ${iconStyles}
`;

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
    background-color: var(--secondary-color);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0;
    width: 100%;
    box-shadow: inset 0 -8px 8px -8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
`;
interface ToolbarProps {
  toggleFilterOpen: () => void;
}

const Toolbar = ({ toggleFilterOpen }: ToolbarProps): JSX.Element => {
  return (
    <StyledToolbar>
      <StyledFilter onClick={toggleFilterOpen} />
    </StyledToolbar>
  );
};

export default Toolbar;
