import R from 'ramda';
import { LOAD_ASSETS } from '../constants/action-types';

export function assetsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ASSETS:
      return R.mergeAll(action.payload, state);
    default:
      return state;
  }
}
