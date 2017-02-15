import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import Perf from 'react-addons-perf';

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

  componentDidUpdate() {
    //Perf.stop()
    //Perf.printInclusive()
    //Perf.printWasted();
    //Perf.printOperations();
  }

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const isActive = this.props.selected_video_id === this.props.video.id.videoId ? ' is-active' : '';
    return (
      <li onClick={() => { /*Perf.start();*/ this.props.onVideoSelect(this.props.video) }} className={"list-group-item" + isActive}>
        <div className="video-list media">
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