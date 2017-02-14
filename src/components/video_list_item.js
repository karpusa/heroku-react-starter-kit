import React, { Component } from 'react';

class VideoListItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.active !== nextProps.active) {
      return true;
    }
    return false;
  }

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const isActive = this.props.active ? ' is-active' : '';

    return (
      <li onClick={() => this.props.onVideoSelect(this.props.video)} className={"list-group-item" + isActive}>
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
export default VideoListItem;