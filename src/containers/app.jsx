import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import homePage from './home';
import notFoundpage from 'components/notFound';
import ProfTool from 'helpers/profTool';
import styles from 'styles/global.less';
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
  history: PropTypes.object.isRequired
};

export default App;
