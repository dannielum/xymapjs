import R from 'ramda';
import { SELECT_TILE, SAVE_TILE } from '../constants/action-types';

export function tileReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_TILE:
      return R.mergeAll(action.payload, state);
    case SAVE_TILE:
      return {
        success: true
      };
    default:
      return state;
  }
}
