import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo, searchMock } from '../actions/index';
import SearchBar from '../components/searchBar/index';
import VideoList from '../components/videoList/index';
import VideoDetail from '../components/videoDetail/index';
import ProfTool from '../helpers/profTool';
import mock from '../mock.json';

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
      <div>
        { this.profToolEnable && <ProfTool /> }
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

App.propTypes = {
  searchMock: React.PropTypes.func.isRequired,
  searchVideo: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideo, searchMock }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
