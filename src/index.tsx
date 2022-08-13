import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import HomePage from './page';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
    uri: 'http://localhost:5002/graphql',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log result (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
