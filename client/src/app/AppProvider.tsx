import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import GlobalStyle from 'common/GlobalStyle';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const AppProvider: FC = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

export default AppProvider;
