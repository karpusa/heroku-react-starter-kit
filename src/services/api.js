import axios from 'axios';

const API_KEY = 'AIzaSyD22bSJa6989EsRhSr2TyG4RYkyh84amnc';
let API_URL = 'https://www.googleapis.com/youtube/v3';

// Mocks server data with json-server
if (global.location.search.indexOf('mock') !== -1) {
  API_URL = `${global.location.protocol}//${global.location.hostname}:3000`;
}

const params = {
  key: API_KEY,
};

const requests = {
  del: (url, config) =>
    axios.delete(`${API_URL}${url}`, config),
  get: (url, config) =>
    axios.get(`${API_URL}${url}`, config),
  put: (url, config) =>
    axios.put(`${API_URL}${url}`, null, config),
  post: (url, config) =>
    axios.post(`${API_URL}${url}`, null, config)
};

// Services

const Videos = {
  search: (term, limit = 10, config = null) =>
    requests.get(`/search`,
      {
        ...config,
        params: {
          ...params,
          part: 'snippet',
          q: term,
          type: 'video',
          maxResults: limit,
        }
      }
    ),
};

export default {
  Videos
};
