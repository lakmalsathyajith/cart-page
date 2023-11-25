import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';
import type { Article } from '../../types';
import type { RootState } from '../../store/store';

import styled from '@emotion/styled';

const StyledH1 = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const StyledProductList = styled.div`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const ProductList = (): JSX.Element => {
  const { products, name, articleCount } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <>
      {products.length ? (
        <StyledH1>
          {name}
          <small> ({articleCount})</small>
        </StyledH1>
      ) : (
        'Loadings...'
      )}
      <StyledProductList>
        {products.length
          ? products.map((article: Article, index: number) => (
              <Product
                article={article}
                key={article.variantName + article.name + index}
              />
            ))
          : []}
      </StyledProductList>
    </>
  );
};

export default ProductList;
