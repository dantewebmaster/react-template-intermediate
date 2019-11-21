import { combineReducers } from 'redux';
import { homeReducer } from './homeReducer';

export const Reducers = combineReducers({
  home: homeReducer
});
