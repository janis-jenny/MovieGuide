import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { ThemeProvider } from '@material-ui/core';
import App from './components/App';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import theme from './utils/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
