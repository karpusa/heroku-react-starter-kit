import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index';


class SearchBar extends Component {
  searchVideo = _.debounce((term) => {
    this.props.searchVideo(term);
  }, 300);

  onInputChange(term) {
    this.searchVideo(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

}

// function mapStateToProps(state) {
//   // Whatever is returned will show up as props
//   return {
//     videos: state.videos
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);