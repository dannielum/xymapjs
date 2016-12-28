import R from 'ramda';
import { NEW_MAP, LOAD_MAP } from '../constants/action-types';

export function mapReducer(state = null, action) {
  switch (action.type) {
    case NEW_MAP:
    case LOAD_MAP:
      return R.mergeAll(action.payload, state);
    default:
      return state;
  }
}
