import { combineReducers } from 'redux';
import videosReducer from './videos';

const rootReducer = combineReducers({
    videos: videosReducer
});

export default rootReducer;