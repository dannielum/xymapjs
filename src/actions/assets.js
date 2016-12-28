import { LOAD_ASSETS } from '../constants/action-types';

export function loadAssets() {
  return {
    type: LOAD_ASSETS,
    payload: {
      spriteSheets: {
      },
      tileMap: [
        {
          id: 1,
          name: 'image.jpg'
        },
        {
          id: 2,
          name: 'image.jpg'
        },
        {
          id: 3,
          name: 'image.jpg'
        },
        {
          id: 4,
          name: 'image.jpg'
        },
        {
          id: 5,
          name: 'image.jpg'
        },
        {
          id: 6,
          name: 'image.jpg'
        },
        {
          id: 7,
          name: 'image.jpg'
        },
        {
          id: 8,
          name: 'image.jpg'
        },
        {
          id: 9,
          name: 'image.jpg'
        },
        {
          id: 10,
          name: 'image.jpg'
        }
      ]
    }
  };
}

export default {
  loadAssets
};
