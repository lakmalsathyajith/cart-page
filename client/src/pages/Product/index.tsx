import React from 'react';
import PageContainer from '../../layouts/PageContainer';
import ProductList from '../../components/ProductList';

import useCategoryQuery from '../../hooks/useCategoryQuery';

const Product = (): JSX.Element => {
  const { reFetch } = useCategoryQuery(['156126'], `de_DE`);

  const onCategoryClick = async (id: string): Promise<void> => {
    await reFetch([id], `de_DE`);
  };

  return (
    <PageContainer onCategoryClick={onCategoryClick}>
      <ProductList />
    </PageContainer>
  );
};

export default Product;
