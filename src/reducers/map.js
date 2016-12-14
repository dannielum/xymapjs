import { LOAD_MAP } from '../constants/action-types';

export function loadMapReducer(state = null, action) {
  switch (action.type) {
    case LOAD_MAP:
      return Object.assign({}, state, action.payload.map);
    default:
      return state;
  }
}
