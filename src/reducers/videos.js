import { SEARCH_VIDEO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_VIDEO:
      //return { ...state, data: action.payload };
      return action.payload;
  }
  return state;
}
