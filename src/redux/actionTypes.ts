export const CREATE_NAV = 'CREATE_NAV';

export const AUTH_LOADING = 'AUTH_LOADING';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const RESET = 'RESET';

export const CAMPAIGNS_LOADING = 'CAMPAIGNS_LOADING';
export const CAMPAIGNS = 'CAMPAIGNS';
export const CAMPAIGNS_ERROR = 'CAMPAIGNS_ERROR';

export type DispatchWithPayload = (arg0: { type: string; payload: boolean }) => void;
export type DispatchWithoutPayload = (arg0: { type: string }) => void;
