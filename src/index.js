import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
//import ReduxPromise from 'redux-promise';
import App from './containers/app';

import reducers from './reducers';

//const API_KEY = 'AIzaSyD22bSJa6989EsRhSr2TyG4RYkyh84amnc';

const store = createStore(reducers, compose(
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);