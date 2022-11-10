import { axiosInstance, getUser, setToken } from 'utils/helpers';
import {
  LOGIN,
  LOGOUT,
  AUTH_LOADING,
  SET_PERMISSIONS,
  DispatchWithoutPayload,
  DispatchWithPayload,
} from '../actionTypes';

export const loading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: AUTH_LOADING,
    payload: true,
  });
};

export const doneloading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: AUTH_LOADING,
    payload: false,
  });
};

export const login = (userData?: any) => (dispatch: any) => {
  dispatch(loading());
  let user = userData;

  if (!user) {
    // call for re-authentication
    user = getUser();
  }

  user && setToken(user.token);

  dispatch({
    type: LOGIN,
    payload: user,
  });

  dispatch(doneloading());

  return user;
};

export const getUserPermissions = () => async (dispatch: any) => {
  try {
    let url = '/auth/permissions/admin';
    const response = await axiosInstance.get(url);
    const { permissions } = response.data.data;
    dispatch({
      type: SET_PERMISSIONS,
      payload: permissions,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch: DispatchWithoutPayload) => {
  dispatch({
    type: LOGOUT,
  });

  dispatch({
    type: 'RESET',
  });
};
