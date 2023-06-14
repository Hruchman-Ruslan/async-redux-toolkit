import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import 'modern-normalize';
import { GlobalStyles } from './styles/GlobalStyles.styled';

import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>
);
