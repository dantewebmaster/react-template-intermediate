import { combineReducers } from 'redux';
import { homeReducer } from './homeReducer';
import { usersReducer } from './usersReducer';

export const Reducers = combineReducers({
  home: homeReducer,
  users: usersReducer,
});
