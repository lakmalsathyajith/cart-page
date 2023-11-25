import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query ($categoryId: [String!]!, $locale: Locale!) {
    categories: productLists(ids: $categoryId, locale: $locale) {
      name
      articleCount
      id
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
          id
        }
      }
      categoryArticles: articlesList(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
            path
          }
        }
      }
    }
  }
`;
