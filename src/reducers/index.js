import { combineReducers } from 'redux';
import { mapReducer } from './map';
import { assetsReducer } from './assets';
import { tileReducer } from './tile';

const rootReducer = combineReducers({
  map: mapReducer,
  assets: assetsReducer,
  selectedTile: tileReducer
});

export default rootReducer;
