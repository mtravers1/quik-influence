import { get_user, setToken } from "utils/helpers";
import { LOGIN, LOGOUT, AUTH_LOADING, DispatchWithoutPayload, DispatchWithPayload } from "../actionTypes";

export const loading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: AUTH_LOADING,
    payload: true
  });
};

export const doneloading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: AUTH_LOADING,
    payload: false
  });
};

export const login = (userData: any) => async (dispatch: any) => {
  dispatch(loading());
  let user = userData;

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
    payload: user
  });

  dispatch(doneloading());
};

export const logout = () => async (dispatch: DispatchWithoutPayload) => {
  dispatch({
    type: LOGOUT
  });
};
