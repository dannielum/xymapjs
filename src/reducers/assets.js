import { LOAD_ASSETS } from '../constants/action-types';

export function loadAssetsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ASSETS:
      return Object.assign({}, state, action.payload.assets);
    default:
      return state;
  }
}
