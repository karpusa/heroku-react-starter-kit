import React from 'react';
import { connect } from 'react-redux';
import SelectedVideoSelector from '../selectors/selected_video.js';
import styles from './video_detail.less';

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div>{'Loading...'}</div>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
            className="embed-responsive-item"
            src={url}
        />
      </div>
      <div className={styles.details}>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

VideoDetail.propTypes = {
  video: React.PropTypes.object
};

VideoDetail.defaultProps = {
  video: null
};

const mapStateToProps = state => {
  return {
    video: SelectedVideoSelector(state)
  };
};

export default connect(mapStateToProps, null)(VideoDetail);
