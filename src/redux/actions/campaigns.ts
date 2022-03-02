import { errorParser } from 'utils/apiHelpers';
import { axiosInstance } from 'utils/helpers';
import {
  CAMPAIGNS_LOADING,
  CAMPAIGNS,
  CAMPAIGNS_ERROR,
  DispatchWithPayload
} from '../actionTypes';

export const loading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: CAMPAIGNS_LOADING,
    payload: true,
  });
};

export const doneloading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: CAMPAIGNS_LOADING,
    payload: false,
  });
};

export const getCampaigns = () => async (dispatch: any) => {
  dispatch(loading());

  try {
    const response = await axiosInstance.get('/users/campaigns');
    const campaigns = response.data.data;

    dispatch({
      type: CAMPAIGNS,
      payload: campaigns,
    });
  } catch (error) {
    const errorMessage = errorParser(error);
    dispatch({
      type: CAMPAIGNS_ERROR,
      payload: errorMessage,
    });
  } finally {
    dispatch(doneloading());
  }
};
