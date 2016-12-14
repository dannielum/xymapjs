import { combineReducers } from 'redux';
import { loadMapReducer } from './map';
import { loadAssetsReducer } from './assets';
import { loadTileReducer } from './tile';

const rootReducer = combineReducers({
  map: loadMapReducer,
  assets: loadAssetsReducer,
  selectedTile: loadTileReducer
});

export default rootReducer;
