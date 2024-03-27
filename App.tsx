import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/react-native';
import { GITHUB_TOKEN, SENTRY_DSN } from '@env';
import { Routes } from './src/routes';
import AppProvider from './src/hooks';

Sentry.init({
  dsn: SENTRY_DSN,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default Sentry.wrap(App);
