import { LOAD_ASSETS } from '../constants/action-types';

export function loadAssets() {
  return {
    type: LOAD_ASSETS,
    payload: {
      assets: {
        tiles: {
          1: {
            id: 1,
            src: 'image.jpg'
          },
          2: {
            id: 2,
            src: 'image.jpg'
          }
        }
      }
    }
  };
}

export default {
  loadAssets
};
