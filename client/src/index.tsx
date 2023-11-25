import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import ProductList from './ProductList.tsxbak';
import Product from './pages/Product';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import store from './store/store';

const queryClient = new QueryClient();

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
};

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const rootNode = document.getElementById('root')!;
const root = createRoot(rootNode);

root.render(
  <React.StrictMode>
    {/* <ProductList /> */}
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Product />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
