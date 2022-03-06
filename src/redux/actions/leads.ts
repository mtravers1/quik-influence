import { FilterDataProps } from 'types';
import { errorParser } from 'utils/apiHelpers';
import { axiosInstance, getQueryString } from 'utils/helpers';
import {
  DispatchWithPayload,
  LEADS_LOADING,
  LEADS_ERROR,
  LEADS,
} from '../actionTypes';

export const leadsLoading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: LEADS_LOADING,
    payload: true
  });
};

export const leadsDoneLoading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: LEADS_LOADING,
    payload: false
  });
};

export const getAllLeads =
  (params?: FilterDataProps) => async (dispatch: any) => {
    dispatch(leadsLoading());

    try {
      const query = getQueryString(params);

      const response = await axiosInstance.get(`/users/leads?${query}`);
      const leads = response.data.data;

      dispatch({
        type: LEADS,
        payload: leads
      });
    } catch (error) {
      const errorMessage = errorParser(error);
      dispatch({
        type: LEADS_ERROR,
        payload: errorMessage
      });
    } finally {
      dispatch(leadsDoneLoading());
    }
  };
