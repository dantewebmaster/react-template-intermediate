import { getUsers } from '../services/users';
import { UPDATE_VALUE, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './types';

export const updateValue = payload => ({
  type: UPDATE_VALUE,
  payload
});

export const fetchUsers = (qty) => async dispatch => {
  try {
    const res = await getUsers(qty);
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: res.data.results
    })
  } catch (error) {
    dispatch({
      type: FETCH_USERS_ERROR,
      payload: error.message
    })
  }
}
