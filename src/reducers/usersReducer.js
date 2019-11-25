import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/types';

const initialState = {
  list: [],
  error: '',
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
