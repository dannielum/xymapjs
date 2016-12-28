import { SELECT_TILE } from '../constants/action-types';

export function tileSelect(tile) {
  return {
    type: SELECT_TILE,
    payload: tile
  };
}

export function saveTile() {
  // save tile
}

export default {
  tileSelect,
  saveTile
};
