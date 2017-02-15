import axios from 'axios';

const API_KEY = 'AIzaSyD22bSJa6989EsRhSr2TyG4RYkyh84amnc';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const SEARCH_VIDEO = 'SEARCH_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function searchVideo(term) {
  return (dispatch) => {
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video',
      maxResults: 10
    };

    axios.get(API_URL, { params: params })
      .then(function(response) {
        dispatch(
          {
            type: SEARCH_VIDEO,
            payload: response.data.items
          }
        );
        if (response.data.items[0]) {
          dispatch(selectVideo(response.data.items[0].id.videoId));
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  };
}

export function selectVideo(id) {
  return {
    type: SELECT_VIDEO,
    payload: id
  };
}