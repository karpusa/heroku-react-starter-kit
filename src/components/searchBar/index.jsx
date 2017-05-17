import _ from 'lodash'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from 'actions/index';
import Loader from 'components/loader';
import styles from './style.less';
import axios from 'axios';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleLoader =  this.handleLoader.bind(this);
  }

  searchVideo = _.debounce((term) => {
    // Cancel requests
    if (this.source) {
      this.source.cancel('Operation canceled by the user.');
    }

    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    // Do request
    this.props.searchVideo(term,
      {
        cancelToken: this.source.token
      }).then(() => {
        this.loader.setStatus(false);
        this.source = null;
      }).catch(() => {
        this.loader.setStatus(false);
        this.source = null;
      })
  }, 300);

  handleChange(event) {
    this.loader.setStatus(true);
    this.searchVideo(event.target.value);
  }

  handleLoader(loader){
    this.loader = loader;
  }

  render() {
    return (
      <div className={styles.root}>
        <Loader ref={this.handleLoader} style={{top: '6px', left: '6px'}} />
        <input defaultValue="Simon's Cat" onChange={this.handleChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchVideo: PropTypes.func.isRequired,
};

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
