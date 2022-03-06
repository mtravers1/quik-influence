import { errorParser } from 'utils/apiHelpers';
import { axiosInstance } from 'utils/helpers';
import {
  CAMPAIGNS_LOADING,
  CAMPAIGNS,
  CAMPAIGNS_ERROR,
  DispatchWithPayload,
  GET_SINGLE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  ARCHIVE_CAMPAIGN,
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

export const getSingleCampaign =
  (campaignId: any, campaignData: any) => async (dispatch: any) => {
    dispatch(loading());

    try {
      let campaign = campaignData;
      if (!campaign) {
        const response = await axiosInstance.get(
          `/users/campaign/${campaignId}`
        );

        campaign = response.data.data;
      }

      dispatch({
        type: GET_SINGLE_CAMPAIGN,
        payload: campaign,
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

export const updateCampaign =
  (campaignId: any, data: any) => async (dispatch: any) => {
    await axiosInstance.put(`/users/campaign/${campaignId}`, data);

    dispatch({
      type: UPDATE_CAMPAIGN,
      payload: { campaignId, data },
    });
  };

export const archiveCampaign = (campaignId: any) => async (dispatch: any) => {
  await axiosInstance.put(`/users/campaign/${campaignId}`, {
    status: 'archive',
  });

  dispatch({
    type: ARCHIVE_CAMPAIGN,
    payload: campaignId,
  });
};
