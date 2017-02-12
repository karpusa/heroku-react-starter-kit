// Reselect selector
// Takes a list of videos and  video Id, and picks out
// the selected Video
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
const videosSelector = state => state.videos;
const selectedVideoSelector = state => state.selected_video_id;

const getVideo = (videos, selected_video_id) => {
    const selectedVideo = _.filter(
        videos,
        {'id': {'videoId': selected_video_id} }
    );
    return selectedVideo[0];
}

export default createSelector(
    videosSelector, // pick off a piece of state
    selectedVideoSelector, // pick off a piece of state
    getVideo // last argument is the function that has our select logic
);