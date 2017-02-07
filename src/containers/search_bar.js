import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'hehe' };
    this.props.searchVideo(this.state.term);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({term});
    this.props.searchVideo(this.state.term);
    //this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
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