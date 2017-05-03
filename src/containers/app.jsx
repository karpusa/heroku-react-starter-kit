import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { searchVideo, searchMock } from '../actions';
import componentWithApi from './componentWithApi';
import homePage from './home';
import notFoundpage from '../components/notFound';
import ProfTool from '../helpers/profTool';
import mock from '../mock.json';
import styles from '../styles/global.less';
import { Router } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.profToolEnable = false;

    if (window.location.search.indexOf('proftool') >= 0) {
      this.profToolEnable = true;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <Router history={this.props.history}>
        <div>
          { this.profToolEnable && <ProfTool /> }
          <Switch>
            <Route
                component={homePage}
                exact
                path='/'
            />
            <Route component={notFoundpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
};

let requests, callbacks;

if (window.location.search.indexOf('mock') !== -1) {
  callbacks = [
    searchMock(mock)
  ];
} else {
  requests = [
    searchVideo('Simon\'s Cat')
    //() => new Promise((resolve) => setTimeout(resolve, 2000)),
    //() => new Promise((resolve, reject) => {
    //   reject('reject');
    //})
  ];
}

const options = {
  requests,
  callbacks
};

export default componentWithApi(App, options);
