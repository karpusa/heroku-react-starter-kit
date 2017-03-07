import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
//import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './containers/app';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducers, compose(
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container')
);
