import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import Perf from 'react-addons-perf';
import ProfTool from '../helpers/profTool';

class App extends Component {
  constructor(props) {
    super(props);

    props.searchVideo('Simon\'s Cat');
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
  return bindActionCreators({ searchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);