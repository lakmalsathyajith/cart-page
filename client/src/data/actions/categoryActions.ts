import { useQuery } from 'react-query';
import { gql } from '@apollo/client';
import axios from 'axios';

const endpoint = 'https://api.spacex.land/graphql/';

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

// export const getCategories = (ids, locale = 'de_DE') => {
//   //console.log({ids})
//   const CATEGORY_QUERY = `
//   {
//     categories: productLists(ids: ${ids} , locale: ${locale}) {
//       name
//       articleCount
//       id
//       childrenCategories: childrenProductLists {
//         list {
//           name
//           urlPath
//           id
//         }
//       }
//       categoryArticles: articlesList(first: 50) {
//         articles {
//           name
//           variantName
//           prices {
//             currency
//             regular {
//               value
//             }
//           }
//           images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
//             path
//           }
//         }
//       }
//     }
//   }`;
//   const queryData = useQuery('categories', () => {
//     return axios({
//       url: '/graphql',
//       method: 'POST',
//       data: {
//         query: CATEGORY_QUERY
//       }
//     });
//   });

//   console.log({ queryData });

//   return queryData;
// };

export const getCategoryProducts = (ids, locale = 'de_DE') => {
  //console.log({ids})
  const CATEGORY_QUERY2 = `
  {
    categories: productLists(ids: ${ids} , locale: ${locale}) {
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
  }`;
  const queryData = useQuery('articles', () => {
    return axios({
      url: '/graphql',
      method: 'POST',
      data: {
        query: CATEGORY_QUERY2
      }
    });
  });

  //console.log({ queryData });

  return queryData;
};
