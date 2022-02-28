import { axiosInstance } from 'utils/helpers';
import { GET_CAMPAIGN } from '../actionTypes';

export const getCampaign = id => async dispatch => {
  const response = await axiosInstance.get(`/users/campaigns`);

  dispatch({
    type: GET_CAMPAIGN,
    payload: response.data.data,
  });
};
