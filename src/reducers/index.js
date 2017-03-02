import { combineReducers } from 'redux';
import videosReducer from './videos'; // list videos
import videoSelectedReducer from './videoSelected';  // selected video

const rootReducer = combineReducers({
  videos: videosReducer,
  selected_video_id: videoSelectedReducer
});

export default rootReducer;
