import { combineReducers } from 'redux';
import videosReducer from './videos'; // list videos
import videoReducer from './video';  // selected video

const rootReducer = combineReducers({
    videos: videosReducer,
    selected_video: videoReducer
});

export default rootReducer;