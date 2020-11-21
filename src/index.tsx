import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global-styles';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { AppWithRouter } from './components/App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppWithRouter />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
