import { LOAD_TILE, SAVE_TILE } from '../constants/action-types';

export function loadTileReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_TILE:
      return Object.assign({}, state, action.payload.tileId);
    case SAVE_TILE:
      return {
        success: true
      };
    default:
      return state;
  }
}
