import React, { Component } from 'react';
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
    const liClasses = classNames(styles.root, isActive, {
      'list-group-item': true
    });

    return (
      <li
          className={liClasses}
          onClick={this.handleVideoSelect}
      >
        <div className="media">
          <div className="media-left">
            <img
                className="media-object"
                src={imageUrl}
            />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  onVideoSelect: React.PropTypes.func.isRequired,
  selected_video_id: React.PropTypes.string,
  video: React.PropTypes.object.isRequired
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
