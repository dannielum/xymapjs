import { NEW_MAP, LOAD_MAP } from '../constants/action-types';

export function newMap() {
  return {
    type: NEW_MAP,
    payload: {
      id: undefined,
      name: undefined,
      data: []
    }
  };
}

export function loadMap() {
  return {
    type: LOAD_MAP,
    payload: {
      id: 1,
      name: 'My Map',
      data: [
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
  newMap,
  loadMap,
  saveMap
};
