import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_CATEGORIES } from '../data/actions/categoryActions';
import {
  addMeta,
  addProducts,
  addCategories,
  addActiveCategory
} from '../store/slices/productSlice';

import type { categoryQueryType } from '../types';
import type { Category } from '../types';

const useCategoryQuery = (
  categoryId: string[],
  locale: string
): categoryQueryType => {
  const dispatch = useDispatch();

  const { loading, error, data, refetch } = useQuery(GET_CATEGORIES, {
    variables: { categoryId, locale },
    fetchPolicy: 'network-only'
  });

  const reFetch = async (
    categoryId: string[],
    locale: string
  ): Promise<void> => {
    try {
      await refetch({ categoryId, locale });
    } catch (error) {
      console.error('Error refetching.');
    }
  };

  useEffect(() => {
    if (data) {
      const { categories } = data;
      const {
        categoryArticles,
        childrenCategories,
        name,
        articleCount,
        id: parentId
      } = categories[0];
      const updatedCategories = childrenCategories.list.map(
        (category: Category) => {
          return { ...category, parent: parentId };
        }
      );
      dispatch(addMeta({ name, articleCount, id: parentId }));
      dispatch(addCategories(updatedCategories));
      dispatch(addProducts(categoryArticles.articles));
      dispatch(addActiveCategory(parentId));
    }
  }, [data]);

  return { loading, error, reFetch };
};

export default useCategoryQuery;
