import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from './video_list_item';
import { selectVideo } from '../actions/index';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect(video) {
    this.props.selectVideo(video.id.videoId);
  }

  render() {
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem
          onVideoSelect={this.onVideoSelect}
          key={video.id.videoId}
          video={video}
          />
      );
    });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);