import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Main from './components/Main/Main.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#app'),
);
