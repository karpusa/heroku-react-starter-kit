import { SELECT_VIDEO } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_VIDEO:
        return action.payload;
  }
  return state;
}