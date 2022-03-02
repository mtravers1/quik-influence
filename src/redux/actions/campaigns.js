import { axiosInstance, setToken } from 'utils/helpers';
import {
  LOGIN,
  LOGOUT,
  AUTH_LOADING,
  CAMPAIGNS_LOADING,
  CAMPAIGNS,
  CAMPAIGNS_ERROR,
} from '../actionTypes';

export const loading = () => async dispatch => {
  dispatch({
    type: CAMPAIGNS_LOADING,
    payload: true,
  });
};

export const doneloading = () => async dispatch => {
  dispatch({
    type: CAMPAIGNS_LOADING,
    payload: false,
  });
};

export const getCampaigns = () => async dispatch => {
  dispatch(loading());

  try {
    const response = await axiosInstance.get('/users/campaigns');
    const campaigns = response.data.data;

    dispatch({
      type: CAMPAIGNS,
      payload: campaigns,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: CAMPAIGNS_ERROR,
      payload: error.response.data.message,
    });
  } finally {
    dispatch(doneloading());
  }
};
