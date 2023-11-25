import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import PageContainer from '../../layouts/PageContainer';
import ProductList from '../../components/ProductList';

import useCategoryQuery from '../../hooks/useCategoryQuery';

const Product = (): JSX.Element => {
  const { loading, error, reFetch } = useCategoryQuery(['156126'], `de_DE`);

  const onCategoryClick = (id: string) => {
    reFetch([id], `de_DE`);
  };

  return (
    <PageContainer onCategoryClick={onCategoryClick}>
      <ProductList />
    </PageContainer>
  );
};

export default Product;
