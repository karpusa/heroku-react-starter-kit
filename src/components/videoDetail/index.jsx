import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectedVideoSelector from 'selectors/selected_video';
import EmbedResponsive from 'components/embedResponsive';
import styles from './style.less';

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div className="col-md-8">{'Not found.'}</div>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <EmbedResponsive url={url} />
      <div className={styles.details}>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

VideoDetail.propTypes = {
  video: PropTypes.object
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
