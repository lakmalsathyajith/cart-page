export interface Category {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory;
  parent?: string;
}

export interface Article {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
}

export interface ChildCategory {
  list: Array<{
    name: string;
    urlPath: string;
  }>;
}

export interface Prices {
  currency: string;
  regular: {
    value: number;
  };
}

export interface Image {
  path: string;
}

export interface CategoryArticle {
  articles: Article[];
}
