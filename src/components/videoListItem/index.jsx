import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './style.less';
import classNames from 'classnames';

class VideoListItem extends Component {
  constructor() {
    super();
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Check item video id with and current selected id and next selected id
    return (this.props.video.id.videoId === this.props.selected_video_id) ||
      (this.props.video.id.videoId === nextProps.selected_video_id);

  }

  handleVideoSelect() {
    this.props.onVideoSelect(this.props.video)
  }

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const isActive = this.props.selected_video_id === this.props.video.id.videoId ? styles.isActive : null;
    const liClasses = classNames(styles.root, isActive);

    return (
      <li
          className={liClasses}
          onClick={this.handleVideoSelect}
      >
        <div className={styles.root__left}>
          <img src={imageUrl} />
        </div>
        <div className={styles.root__right}>
          {this.props.video.snippet.title}
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
  selected_video_id: PropTypes.string,
  video: PropTypes.object.isRequired
};

VideoListItem.defaultProps = {
  selected_video_id: null
};

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    selected_video_id: state.selected_video_id
  };
}


export default connect(mapStateToProps)(VideoListItem);
