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
    let countries = await axios.get(
      'https://api.countrystatecity.in/v1/countries',
      {
        headers: {
          'X-CSCAPI-KEY':
            'YkRMeEFlYXFwbmZqY1NEbkpybG1MbjNUcHdhTjdrNDc4a2oyaWZRUg==',
          'content-type': 'application/json',
        },
      }
    );

    countries = countries.data.map((country: any) => ({
      label: country.name,
      value: country.iso2,
    }));

    dispatch({
      type: GET_COUNTRIES,
      payload: {
        country: countries,
        apiToken: 'YkRMeEFlYXFwbmZqY1NEbkpybG1MbjNUcHdhTjdrNDc4a2oyaWZRUg==',
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
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const res = await axiosInstance.get('/admin/dashboard');

    dispatch({
      type: GET_DASHBOARD_INFO,
      payload: res.data.data,
    });
  };

// GET_DASHBOARD_INFO, UPDATE_DASHBOARD_INFO;
