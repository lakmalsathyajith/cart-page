import { type Article } from '../types';

export interface ProductCategory {
  name: string;
  urlPath: string;
  id: string;
  parent: string;
}

export interface AppState {
  categories: ProductCategory[];
  products: Article[];
  name: string;
  articleCount: number;
  isLoading: boolean;
  activeCategory: string;
}
