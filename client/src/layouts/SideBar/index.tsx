import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { X } from '@emotion-icons/octicons';
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import type { Category } from '../../types';
import Toolbar from '../Toolbar';

const StyledAside = styled.aside`
  grid-area: sidebar;
  background-color: lavender;
  border-radius: 6px;
  padding: 10px;
  background-color: #fff;
  box-shadow: inset 0 -8px 8px -8px rgba(0, 0, 0, 0.2);
  margin-left: 12px;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 8px;
  }
  ul {
    list-style-type: none;
    text-decoration: none;
  }

  ul li {
    line-height: 2;
    margin-left: 8px;
    text-decoration: none;
    list-style: none;
  }
  ul li a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.isFilterOpen ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: auto;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    margin-left: 0px;
  }
`;

const iconStyles = css`
  width: 24px;
  height: 24px;
  margin: 0 16px;
  cursor: pointer;
  color: #333;
  position: absolute;
  right: 20px;
  top: 20px;

  &:hover {
    color: #007bff;
  }
`;

const StyledX = styled(X)`
  ${iconStyles}
`;

const StyledLink = styled.a`
  cursor: pointer;
  font-weight: ${(props) => (props.active ? '700' : '400')};
`;

interface SidebarProps {
  onCategoryClick: (id: string) => Event;
}

const SideBar = ({ onCategoryClick }: SidebarProps): JSX.Element => {
  const [isFilterOpen, setFilterOpen] = useState(true);

  const { categories, activeCategory } = useSelector(
    (state: RootState) => state.products
  );

  const toggleFilterOpen = (): void => {
    setFilterOpen(!isFilterOpen);
  };

  const renderSubCategories = (selectedCategory): JSX.Element => {
    const subCategories = categories.filter(
      (category: Category) => category.parent === selectedCategory
    );
    return (
      <ul>
        {subCategories.map(({ name, urlPath, id }) => (
          <li key={name}>
            <StyledLink
              onClick={() => onCategoryClick(id)}
              active={id === activeCategory}
            >
              {name}
            </StyledLink>
            {renderSubCategories(id)}
          </li>
        ))}
      </ul>
    );
  };

  const firstLevelCategories = categories.filter((category) => {
    const itemFound = categories
      .filter((categoryMap) => {
        return categoryMap.id === category.parent;
      })
      .pop();

    return !itemFound;
  });

  return (
    <>
      <Toolbar toggleFilterOpen={toggleFilterOpen} />
      <StyledAside isFilterOpen={isFilterOpen}>
        <StyledX onClick={toggleFilterOpen} />
        <h3>Kategorien</h3>
        {firstLevelCategories.length ? (
          <ul>
            {firstLevelCategories.map(({ name, urlPath, id }) => (
              <li key={name}>
                <StyledLink
                  onClick={() => onCategoryClick(id)}
                  active={id === activeCategory}
                >
                  {name}
                </StyledLink>
                {renderSubCategories(id)}
              </li>
            ))}
          </ul>
        ) : (
          'Loading...'
        )}
      </StyledAside>
    </>
  );
};

export default SideBar;
