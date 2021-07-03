import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { overrides, defaultTheme } from './themes/index';
import { store } from './store';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const theme = createMuiTheme({ ...defaultTheme.default, ...overrides });
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
ReactDOM.render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </MuiThemeProvider>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
