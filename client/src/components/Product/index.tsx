import React from 'react';
import type { Article } from '../../types';
import Button from '../Base/Button';

import styled from '@emotion/styled';

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2]
});

const StyledProduct = styled.article`
  border: 1px solid lavenderblush;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  justify-content: space-between;

  img {
    width: 100%;
    object-fit: fill;
    box-sizing: border-box;
    border-radius: 4px;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0px;
    width: 100%;
  }

  h2 {
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const StyledProductImage = styled.div`
  position: relative;
  padding-top: 100%;
  width: 100%;
  img {
    width: 100%;
    object-fit: fill;
    box-sizing: border-box;
    border-radius: 4px;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0px;
    width: 100%;
  }
`;

const StyledProductDetails = styled.div`
  h2 {
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const Product = ({ article }: { article: Article }): JSX.Element => {
  return (
    <StyledProduct data-testid="product-component">
      <StyledProductImage>
        <img src={article.images[0].path} alt={article.name} />
      </StyledProductImage>
      <StyledProductDetails>
        <h2>{article.name}</h2>
        <p>{formatter.format(article.prices.regular.value / 100)}</p>
        <Button>Add to cart</Button>
      </StyledProductDetails>
    </StyledProduct>
  );
};

export default Product;
