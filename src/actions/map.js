import { LOAD_MAP } from '../constants/action-types';

export function loadMap() {
  return {
    type: LOAD_MAP,
    payload: {
      map: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]
    }
  };
}

export function saveMap() {
  // save map
}

export default {
  loadMap,
  saveMap
};
