import { FilterDataProps } from "types";
import { errorParser } from "utils/apiHelpers";
import { axiosInstance, getQueryString, isAdmin } from "utils/helpers";
import {
  DispatchWithPayload,
  LEADS_LOADING,
  LEADS_ERROR,
  LEADS
} from "../actionTypes";

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
  (params?: FilterDataProps, filters: any = {}) =>
    async (dispatch: any) => {
      dispatch(leadsLoading());
      const isAllowed = isAdmin();

      try {
        const query = getQueryString({ ...params });
        let response;

        if (
          filters?.filters &&
          filters?.filters.pageType === "LEADS_DATA_POINTS" &&
          !isAllowed
        ) {
          const url = `/users/leads-data-points?${query}`;
          delete filters.filters.pageType;
          response = await axiosInstance.get(url, {
            params: filters
          });

          dispatch({
            type: LEADS,
            payload: {
              data: [],
              resType: "LEADS_DATA_POINTS",
              meta: response.data.data
            }
          });
        } else {
          const url = `/users/leads?${query}`;
          response = await axiosInstance.get(url, {
            params: filters
          });

          const { rows, count, currentPage, recieved, totalPages } =
            response.data.data;

          dispatch({
            type: LEADS,
            payload: {
              data: rows,
              resType: "ALL_LEADS",
              meta: { count, currentPage, recieved, totalPages }
            }
          });
        }
      } catch (error) {
        const errorMessage = errorParser(error);
        dispatch({
          type: LEADS_ERROR,
          payload: {
            errorMessage,
            resType: !isAllowed ? "LEADS_DATA_POINTS" : "ALL_LEADS"
          }
        });
      } finally {
        dispatch(leadsDoneLoading());
      }
    };


export const searchAllLeads =
  (filters: any = {}) =>
    async (dispatch: any) => {
      dispatch(leadsLoading());
      const isAllowed = isAdmin();

      try {
        let response;
        const url = `/users/leads-search-all`;
        response = await axiosInstance.get(url, {
          params: filters
        });

        dispatch({
          type: LEADS,
          payload: {
            data: [],
            resType: "LEADS_DATA_POINTS",
            meta: response.data.data
          }
        });

      } catch (error) {
        const errorMessage = errorParser(error);
        dispatch({
          type: LEADS_ERROR,
          payload: {
            errorMessage,
            resType: "LEADS_DATA_POINTS"
          }
        });
      } finally {
        dispatch(leadsDoneLoading());
      }
    };


