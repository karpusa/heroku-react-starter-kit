import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import homePage from './home';
import notFoundpage from 'components/notFound';
import ProfTool from 'helpers/profTool';
import { Router } from 'react-router';
// Global Styles
import 'styles/global.less';
// Components from https://github.com/material-components/material-components-web
import '@material/typography/dist/mdc.typography.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.profToolEnable = global.location.search.indexOf('proftool') >= 0;
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
