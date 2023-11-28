import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import Product from './pages/Product';

import globalStyles from './styles/GlobalStyles';

import store from './store/store';

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const rootNode = document.getElementById('root')!;
const root = createRoot(rootNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Product />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
