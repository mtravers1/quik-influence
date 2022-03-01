import { get_user, setToken } from 'utils/helpers';
import { LOGIN, LOGOUT, AUTH_LOADING } from '../actionTypes';

export const loading = () => async dispatch => {
  dispatch({
    type: AUTH_LOADING,
    payload: true,
  });
};

export const doneloading = () => async dispatch => {
  dispatch({
    type: AUTH_LOADING,
    payload: false,
  });
};

export const login = userData => async dispatch => {
  dispatch(loading());
  let user = userData;

  console.log('called', user);

  if (!user) {
    try {
      // call for re-authentication
      user = get_user();
    } catch (err) {
      console.log(err);
    }
  }

  user && setToken(user.token);

  dispatch({
    type: LOGIN,
    payload: user,
  });

  dispatch(doneloading());
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT,
  });
};
