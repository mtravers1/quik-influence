import { errorParser } from 'utils/apiHelpers';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
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
  JOINABLE_CAMPAIGNS_LOADING,
  JOINABLE_CAMPAIGNS,
  JOINABLE_CAMPAIGNS_ERROR,
} from '../actionTypes';

export const loadingJoinableCampaign =
  () => async (dispatch: DispatchWithPayload) => {
    dispatch({
      type: JOINABLE_CAMPAIGNS_LOADING,
      payload: true,
    });
  };

export const doneloadingJoinableCampaign =
  () => async (dispatch: DispatchWithPayload) => {
    dispatch({
      type: JOINABLE_CAMPAIGNS_LOADING,
      payload: false,
    });
  };

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
  (pageNumber = '1', pageSize = DEFAULT_PAGE_SIZE) =>
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

export const getJoinableCampaigns =
  (pageNumber = '1', pageSize = DEFAULT_PAGE_SIZE) =>
  async (dispatch: any) => {
    const response = await axiosInstance.get(`/users/joinable-campaigns`);
    const campaigns = response.data.data;

    dispatch({
      type: JOINABLE_CAMPAIGNS,
      payload: campaigns,
    });
  };

export const getPendingCampaigns = async (
  pageNumber = '1',
  pageSize = DEFAULT_PAGE_SIZE
) => {
  const response = await axiosInstance.get(
    `/users/pending-joinable-campaigns?page=${pageNumber}&pageSize=${DEFAULT_PAGE_SIZE}`
  );

  const campaign = response.data.data.rows;
  return campaign;
};

export const modifyCampaignRequest = async (data: any) =>
  axiosInstance.put(`/users/modify-campaign-request`, {
    ...data,
  });

export const requestToBeAssignedThisCampaign = async (campaignId: string) => {
  const response = await axiosInstance.put(`/users/request-campaign`, {
    campaignId,
  });
  const campaign = response.data.data;

  return campaign;
};

export const getFirst10Campaigns = () => async (dispatch: any) => {
  const response = await axiosInstance.get(
    `/users/campaigns?page=${1}&pageSize=${10}`
  );

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
  (
    campaignId: any,
    page: string,
    pageSize: string = DEFAULT_PAGE_SIZE,
    sortBy = 'createdAt',
    filters: any = {}
  ) =>
  async (dispatch: any) => {
    try {
      dispatch(loading());

      const response = await axiosInstance.get(
        `/users/leads/${campaignId}?sortField=${sortBy}&orderBy=ASC&pageSize=${pageSize}&${
          page ? `page=${page}` : ''
        }`,
        {
          params: filters,
        }
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

export const setSMSCampaign = (campaign: any) => async (dispatch: any) => {
  dispatch({
    type: SET_SMS_CAMPAIGN,
    payload: campaign,
  });
};
