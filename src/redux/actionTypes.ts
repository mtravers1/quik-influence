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

export type DispatchWithPayload = (arg0: {
  type: string;
  payload: boolean;
}) => void;
export type DispatchWithoutPayload = (arg0: { type: string }) => void;
