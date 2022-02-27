import { cookieStorageManager } from '@chakra-ui/react';
import axios from 'axios';
import { DropdownSelectOption } from 'components/DropdownSelect';

const baseurl = 'https://quik-influence.herokuapp.com';

const _axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});

_axiosInstance.interceptors.request.use((config: any) => {
  let token: any = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  config.headers.token = token;
  return config;
});

export const axiosInstance = _axiosInstance;

export const validate = (field: any, Regex: any, pattern: any) => {
  if (pattern.test(field)) return true;
  return false;
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getNumberRange = (
  start: number,
  stop: number,
  step: number
): DropdownSelectOption[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => ({
    label: (start + i * step).toString(),
    value: (start + i * step).toString(),
  }));
