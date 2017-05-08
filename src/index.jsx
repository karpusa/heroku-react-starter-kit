import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './containers/app';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const store = createStore(reducers, compose(
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

history.listen((location, action) => {
  console.log(action, location);
});

ReactDOM.render(
  <Provider store={store}>
    <App
        history={history}
    />
  </Provider>,
  document.querySelector('.container')
);
