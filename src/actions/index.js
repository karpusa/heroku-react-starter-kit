//import axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD22bSJa6989EsRhSr2TyG4RYkyh84amnc';

export const SEARCH_VIDEO = 'SEARCH_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function searchVideo(term) {
  return (dispatch) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        dispatch(
            {
                type: SEARCH_VIDEO,
                payload: videos
            }
        );
        if (videos[0]) {
            dispatch(selectVideo(videos[0].id.videoId));
        }
    });
  };
}

export function selectVideo(id) {
  return {
    type: SELECT_VIDEO,
    payload: id
  };
}