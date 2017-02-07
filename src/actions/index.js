//import axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD22bSJa6989EsRhSr2TyG4RYkyh84amnc';

export const SEARCH_VIDEO = 'SEARCH_VIDEO';

export function searchVideo(term) {
  return (dispatch) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        dispatch(
            {
                type: SEARCH_VIDEO,
                payload: videos
            }
        )
    });
  };
}