import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo, searchMock } from '../actions/index';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import Perf from 'react-addons-perf';
import ProfTool from '../helpers/profTool';
import mock from '../mock.json';

class App extends Component {
  constructor(props) {
    super(props);

    if (window.location.search.indexOf('mock')===-1) {
      props.searchVideo('Simon\'s Cat');
    } else {
      props.searchMock(mock);
    }
  }

  render() {
    return (
      <div>
        <ProfTool />
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideo, searchMock }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);