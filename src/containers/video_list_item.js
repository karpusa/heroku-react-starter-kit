import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './video_list_item.less';
import classNames from 'classnames';

class VideoListItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // Check item video id with and current selected id and next selected id
    if  (
          (this.props.video.id.videoId === this.props.selected_video_id) ||
          (this.props.video.id.videoId === nextProps.selected_video_id)
        ) {
            return true;
    }
    return false;
  }

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const isActive = this.props.selected_video_id === this.props.video.id.videoId ? styles.isActive : null;
    const liClasses = classNames(styles.root, isActive, {
      'list-group-item': true
    });

    return (
      <li onClick={() => this.props.onVideoSelect(this.props.video) } className={liClasses}>
        <div className="media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    selected_video_id: state.selected_video_id
  };
}


export default connect(mapStateToProps)(VideoListItem);