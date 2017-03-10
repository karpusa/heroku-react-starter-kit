import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom'
import { searchVideo, searchMock } from '../actions';
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

    if (window.location.search.indexOf('mock')===-1) {
      props.searchVideo('Simon\'s Cat');
    } else {
      props.searchMock(mock);
    }

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
  searchMock: React.PropTypes.func.isRequired,
  searchVideo: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideo, searchMock }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
