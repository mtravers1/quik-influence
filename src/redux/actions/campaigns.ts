import { FilterDataProps } from 'types';
import { errorParser } from 'utils/apiHelpers';
import { axiosInstance, getQueryString } from 'utils/helpers';
import {
  CAMPAIGNS_LOADING,
  CAMPAIGNS,
  CAMPAIGNS_ERROR,
  DispatchWithPayload,
  GET_SINGLE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  ARCHIVE_CAMPAIGN,
  LEADS_LOADING,
  LEADS_ERROR,
  LEADS,
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

export const leadsLoading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: LEADS_LOADING,
    payload: true,
  });
};

export const leadsDoneLoading = () => async (dispatch: DispatchWithPayload) => {
  dispatch({
    type: LEADS_LOADING,
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

export const getCampaigns = (pageNumber = 1, pageSize = 10) => async (dispatch: any) => {
  dispatch(loading());

  try {
    const response = await axiosInstance.get(`/users/campaigns?page=${pageNumber}&pageSize=${pageSize}`);
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


export const getAllLeads = (params?: FilterDataProps) => async (dispatch: any) => {
  dispatch(leadsLoading());

  try {
    const query = getQueryString(params);

    const response = await axiosInstance.get(`/users/leads?${query}`);
    const leads = response.data.data;

    dispatch({
      type: LEADS,
      payload: leads.rows,
    });
  } catch (error) {
    const errorMessage = errorParser(error);
    dispatch({
      type: LEADS_ERROR,
      payload: errorMessage,
    });
  } finally {
    dispatch(leadsDoneLoading());
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
