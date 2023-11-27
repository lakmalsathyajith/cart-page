import { createSlice } from '@reduxjs/toolkit';
import { type ProductCategory, type AppState } from '../../types/store.types';

const initialState: AppState = {
  categories: [],
  products: [],
  name: '',
  articleCount: 0,
  isLoading: false,
  activeCategory: ''
};
const productSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addMeta: (state, action) => {
      const { name, articleCount } = action.payload;
      state.name = name;
      state.articleCount = articleCount;
    },
    addCategories: (state, action) => {
      const uniqueItems = action.payload.filter((newItem: ProductCategory) => {
        return !state.categories.some(
          (existingItem) => existingItem.id === newItem.id
        );
      });
      state.categories = [...state.categories, ...uniqueItems];
    },
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});
export const {
  addMeta,
  addProducts,
  addCategories,
  setIsLoading,
  addActiveCategory
} = productSlice.actions;
export default productSlice.reducer;
