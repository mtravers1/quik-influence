export const CREATE_NAV = 'CREATE_NAV';

export const AUTH_LOADING = 'AUTH_LOADING';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const RESET = 'RESET';

export const CAMPAIGNS_LOADING = 'CAMPAIGNS_LOADING';
export const CAMPAIGNS = 'CAMPAIGNS';
export const CAMPAIGNS_ERROR = 'CAMPAIGNS_ERROR';
export const GET_SINGLE_CAMPAIGN = 'GET_SINGLE_CAMPAIGN';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
export const ARCHIVE_CAMPAIGN = 'ARCHIVE_CAMPAIGN';
export const SET_SMS_CAMPAIGN = 'SET_SMS_CAMPAIGN';
export const GET_CAMPAIGN_LEADS = 'GET_CAMPAIGN_LEADS';
export const FIRST_TEN_CAMPAIGNS = 'FIRST_TEN_CAMPAIGNS';

export const LEADS_LOADING = 'LEADS_LOADING';
export const LEADS_ERROR = 'LEADS_ERROR';
export const LEADS = 'LEADS';

export const CREATE_FORM_DATA = 'CREATE_FORM_DATA';
export const CREATE_TAGS = 'CREATE_TAGS';

export const ADD_TAGS = 'ADD_TAGS';
export const SET_PERMISSIONS = 'SET_PERMISSIONS';

export const CREATE_FORM_INPUT = 'CREATE_FORM_INPUT';
export const UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT';

export const JOINABLE_CAMPAIGNS_LOADING = 'JOINABLE_CAMPAIGNS_LOADING';
export const JOINABLE_CAMPAIGNS = 'JOINABLE_CAMPAIGNS';
export const JOINABLE_CAMPAIGNS_ERROR = 'JOINABLE_CAMPAIGNS_ERROR';

export const GET_PAYMENT_INFO = 'GET_PAYMENT_INFO';
export const UPDATE_PAYMENT_INFO = 'UPDATE_PAYMENT_INFO';
export const CREATE_PAYMENT_INFO = 'CREATE_PAYMENT_INFO';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const UPDATE_STATES = 'UPDATE_STATES';

export const GET_DASHBOARD_INFO = 'GET_DASHBOARD_INFO';
export const UPDATE_DASHBOARD_INFO = 'UPDATE_DASHBOARD_INFO';

export type DispatchWithPayload = (arg0: {
  type: string;
  payload: boolean;
}) => void;
export type DispatchWithoutPayload = (arg0: { type: string }) => void;
