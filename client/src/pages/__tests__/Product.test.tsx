import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import store from '../../store/store';
import { GET_CATEGORIES } from '../../data/actions/categoryActions';
import data from './../../data/mocks/apolloApi.json';
import storeData from './../../data/mocks/store.json';
import * as reactRedux from 'react-redux';

import Product from '../Product';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

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

beforeEach(() => {
  useSelectorMock.mockReturnValue(storeData);
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
  useSelectorMock.mockReturnValue(storeData);
  const renderComponent = (): void => {
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
