import { LOAD_TILE } from '../constants/action-types';

export function loadTile() {
  return {
    type: LOAD_TILE,
    payload: {
      tileId: 1
    }
  };
}

export function saveTile() {
  // save tile
}

export default {
  loadTile,
  saveTile
};
