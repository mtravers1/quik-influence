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
  SET_SMS_CAMPAIGN,
  GET_CAMPAIGN_LEADS,
  FIRST_TEN_CAMPAIGNS,
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

export const getCampaigns =
  (pageNumber = 1, pageSize = 10) =>
    async (dispatch: any) => {
      dispatch(loading());

      try {
        const response = await axiosInstance.get(
          `/users/campaigns?page=${pageNumber}&pageSize=${pageSize}`
        );
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

export const getFirst10Campaigns = () => async (dispatch: any) => {
  const response = await axiosInstance.get(
    `/users/campaigns?page=${1}&pageSize=${10}`
  );

  console.log(response.data.data.rows);

  const campaigns = response.data.data.rows?.map((data: any) => ({
    name: data.name,
    path: `/campaign/${data.id}`,
  }));

  dispatch({
    type: FIRST_TEN_CAMPAIGNS,
    payload: campaigns,
  });
};

export const getCampaignLeads =
  (campaignId: any, page: string) => async (dispatch: any) => {
    dispatch(loading());

    const response = await axiosInstance.get(
      `/users/leads/${campaignId}?pageSize=${20}&${page ? `page=${page}` : ''}`
    );

    const { rows, count, currentPage, recieved, totalPages } =
      response.data.data;

    dispatch({
      type: GET_CAMPAIGN_LEADS,
      payload: {
        leads: {
          data: rows,
          meta: {
            count,
            recieved,
            totalPages,
            currentPage,
          },
        },
        campaignId,
      },
    });
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

export const setSMSCampaign = (campaign: any) => async (dispatch: any) => {

  dispatch({
    type: SET_SMS_CAMPAIGN,
    payload: campaign,
  });
};
