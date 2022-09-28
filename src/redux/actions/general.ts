import { axiosInstance } from 'utils/helpers';
import {
  CREATE_FORM_DATA,
  CREATE_TAGS,
  ADD_TAGS,
  CREATE_FORM_INPUT,
  UPDATE_FORM_INPUT,
  GET_PAYMENT_INFO,
  UPDATE_PAYMENT_INFO,
  CREATE_PAYMENT_INFO,
  GET_COUNTRIES,
  UPDATE_STATES,
  GET_DASHBOARD_INFO,
  UPDATE_DASHBOARD_INFO,
  SET_MENU,
  SET_OPEN_PANEL
} from '../actionTypes';
import axios from 'axios';

export const createFormData =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_FORM_DATA,
      payload: data,
    });
  };

export const createFormInputs =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_FORM_INPUT,
      payload: data,
    });
  };

export const updateFormInputs =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: UPDATE_FORM_INPUT,
      payload: data,
    });
  };

export const createTags =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_TAGS,
      payload: data,
    });
  };

export const addTags =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: ADD_TAGS,
      payload: data,
    });
  };

export const getPaymentInfo =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const paymentInfo = await axiosInstance.get('/users/payment-info');

    dispatch({
      type: GET_PAYMENT_INFO,
      payload: paymentInfo.data.data,
    });
  };

export const updatePaymentInfo =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: UPDATE_PAYMENT_INFO,
      payload: data,
    });
  };

export const addPaymentInfo =
  (data: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: CREATE_PAYMENT_INFO,
      payload: data,
    });
  };

export const fetchCountries =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: GET_COUNTRIES,
      payload: {
        country: [{ label: 'United States', value: 'US' }],
      },
    });
  };

export const updateStates =
  (countryCode: string, statesArr: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: UPDATE_STATES,
      payload: {
        [countryCode]: statesArr,
      },
    });
  };

export const getDashboardInfo =
  (date: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const res = await axiosInstance.get(
      `/admin/dashboard?from=${date.startDate}&to=${date.endDate}`
    );

    dispatch({
      type: GET_DASHBOARD_INFO,
      payload: res.data.data,
    });
  };

export const setMenu =
  (state: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SET_MENU,
      payload: state,
    });
  };

export const setOpenPanel =
  (state: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SET_OPEN_PANEL,
      payload: state,
    });
  };

// GET_DASHBOARD_INFO, UPDATE_DASHBOARD_INFO;
