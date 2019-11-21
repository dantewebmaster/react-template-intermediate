import { UPDATE_VALUE } from '../actions/types';

const initialState = {
  value: 'caraiii'
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};
