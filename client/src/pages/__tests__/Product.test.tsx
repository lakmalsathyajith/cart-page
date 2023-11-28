import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import store from '../../store/store';
import { GET_CATEGORIES } from '../../data/actions/categoryActions';
import data from './../../data/mocks/apolloApi.json';
import * as reactRedux from 'react-redux';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

import Product from '../Product';

const apolloProviderMocks = [
  {
    request: {
      query: GET_CATEGORIES,
      variables: { categoryId: ['156126'], locale: 'de_DE' }
    },
    result: data
  }
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

const storeMockData = {
  categories: [
    {
      __typename: 'ProductList',
      name: 'Polstermöbel',
      urlPath: 'alle-polstermoebel/',
      id: '156666',
      parent: '156126'
    },
    {
      __typename: 'ProductList',
      name: 'Betten',
      urlPath: 'alle-betten/',
      id: '177577',
      parent: '156126'
    }
  ],
  products: [
    {
      __typename: 'Article',
      name: 'Lattenrost Driggs I',
      variantName: 'nicht verstellbar - Birke / Silber - 160 x 200cm',
      prices: {
        __typename: 'ArticlePrices',
        currency: 'EUR',
        regular: {
          __typename: 'ArticleRegularPrice',
          value: 20999
        }
      },
      images: [
        {
          __typename: 'ArticleGalleryImage',
          path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000201491-200226-15063500003-IMAGE-P000000001000201491.webp'
        }
      ]
    },
    {
      __typename: 'Article',
      name: 'Schminktisch „Sherry“ Weiß Hochglanz mit',
      variantName: 'Weiß - Holz teilmassiv - 120 x 75 x 55 cm',
      prices: {
        __typename: 'ArticlePrices',
        currency: 'EUR',
        regular: {
          __typename: 'ArticleRegularPrice',
          value: 36990
        }
      },
      images: [
        {
          __typename: 'ArticleGalleryImage',
          path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/b/f/bf4bfa1334da4f2d859661c9bcc82fff.cropped-99-30-770-944.processed.webp'
        }
      ]
    },
    {
      __typename: 'Article',
      name: 'Federholzrahmen Colorado 28 NV',
      variantName: 'nicht verstellbar - 140 x 200cm',
      prices: {
        __typename: 'ArticlePrices',
        currency: 'EUR',
        regular: {
          __typename: 'ArticleRegularPrice',
          value: 10999
        }
      },
      images: [
        {
          __typename: 'ArticleGalleryImage',
          path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000281308-210723-12304400001-IMAGE-P000000001000281308.webp'
        }
      ]
    }
  ],
  activeCategory: ''
};

beforeEach(() => {
  useSelectorMock.mockReturnValue(storeMockData);
  render(
    <Provider store={store}>
      <MockedProvider mocks={apolloProviderMocks} addTypename={false}>
        <Product />
      </MockedProvider>
    </Provider>
  );
});

afterAll(() => {
  jest.restoreAllMocks();
  cleanup();
});

test('renders component with mocked Redux store and apollo provider without errors', () => {
  useSelectorMock.mockReturnValue(storeMockData);
  const renderComponent = () => {
    render(
      <Provider store={store}>
        <MockedProvider mocks={apolloProviderMocks} addTypename={false}>
          <Product />
        </MockedProvider>
      </Provider>
    );
  };
  expect(renderComponent).not.toThrow();
});

test('renders component with child `product` components.', () => {
  const productComponents = screen.getAllByTestId('product-component');
  expect(productComponents.length).toBe(3);
});

test('renders 2 categories.', () => {
  const categoryLinks = screen.getAllByTestId('sidebar-list-item');
  expect(categoryLinks.length).toBe(2);
});
