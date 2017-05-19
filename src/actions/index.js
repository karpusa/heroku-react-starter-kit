import api from 'services/api';

export const SEARCH_VIDEO = 'SEARCH_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function searchMock(data) {
  return (dispatch) => {
    dispatch(
      {
        type: SEARCH_VIDEO,
        payload: data.videos
      }
    );

    if (data.videos[0]) {
      dispatch(selectVideo(data.videos[0].id.videoId));
    }
  }
}

export const searchVideo = (term, config) => async (dispatch) => {
  try {
    let {data} = await api.Videos.search(term, 10, config);
    // await dispatch(testExample());

    dispatch(
      {
        type: SEARCH_VIDEO,
        payload: data.items
      }
    );
    if (data.items[0]) {
      dispatch(selectVideo(data.items[0].id.videoId));
    }
  } catch(error) {
    throw new Error(error);
  }
};

// Just Example
// export const testExample = () => async (dispatch) => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     //dispatch({ type: ACTION_SUCCESS });
//   } catch(error) {
//     throw new Error(error);
//   }
// };

// Old style
// export function searchVideo(term, options = {}) {
//   return (dispatch) => {
//     const params = {
//       part: 'snippet',
//       key: API_KEY,
//       q: term,
//       type: 'video',
//       maxResults: 10
//     };
//
//     return axios.get(API_URL, {
//       params: params,
//       ...options
//     })
//       .then(function(response) {
//         dispatch(
//           {
//             type: SEARCH_VIDEO,
//             payload: response.data.items
//           }
//         );
//         if (response.data.items[0]) {
//           dispatch(selectVideo(response.data.items[0].id.videoId));
//         }
//       });
//   };
// }

export function selectVideo(id) {
  return {
    type: SELECT_VIDEO,
    payload: id
  };
}
