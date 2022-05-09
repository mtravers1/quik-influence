import axios from 'axios';
import { omitBy, isNil } from 'lodash';
import { ADMINS_ID, Q_TOKEN } from './constants';

import { DropdownSelectOption } from 'components/DropdownSelect';
import { FilterDataProps } from 'types';
import { format } from 'date-fns';

export const baseurl = process.env.BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});

export const logout = () => {
  localStorage.removeItem(Q_TOKEN);
  window.location.href = '/login';
};

export const validate = (field: any, pattern: any) => {
  const parts = /\/(.*)\/(.*)/.exec(pattern) || [];
  let restoredRegex = new RegExp(parts[1], parts[2]);
  if (restoredRegex.test(field)) return true;
  return false;
};

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common['token'] = token;

  if (typeof window !== 'undefined') {
    localStorage.setItem(Q_TOKEN, token);
  }
};

const tokens: any = {};

export function parseJwt(token: any) {
  if (!token) return;
  if (tokens[token]) return tokens[token];

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      // Buffer.from(base64, 'base64')
      .split('')
      .map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  const result = JSON.parse(jsonPayload);
  tokens[token] = result;

  return result;
}

export function getUser() {
  let user;
  let ctoken;
  let isExpired: boolean = false;

  if (typeof window !== 'undefined') {
    ctoken = localStorage.getItem(Q_TOKEN);
  }

  if (ctoken !== 'null') {
    user = parseJwt(ctoken);
  }

  isExpired = user && user.exp && user.exp < Date.now() / 1000;

  return { admin: user, token: ctoken, isExpired };
}

export const getNumberRange = (
  start: number,
  stop: number,
  step: number
): DropdownSelectOption[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => ({
    label: (start + i * step).toString(),
    value: (start + i * step).toString(),
  }));

export const getQueryString = (params?: FilterDataProps) => {
  const paramsFilters = omitBy(params, isNil);
  const query = Object.keys(paramsFilters)
    .map(
      k => encodeURIComponent(k) + '=' + encodeURIComponent(paramsFilters[k])
    )
    .join('&');
  return query;
};

export const getSocialHandleHeader = (socialColumns: string[]): string[] => {
  let socialHeader: string[] = [];
  socialColumns.forEach((socialColumn: any) => {
    switch (socialColumn) {
      case 'facebookHandle':
        socialHeader.push('Facebook');
        break;
      case 'twitterHandle':
        socialHeader.push('Twitter');
        break;
      case 'instagramId':
        socialHeader.push('Instagram');
        break;
      case 'tiktokHandle':
        socialHeader.push('Tik Tok');
        break;
      default:
        break;
    }
  });
  return socialHeader;
};

export const similarity = (s1: string, s2: string) => {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / longerLength;
};

function editDistance(s1: string, s2: string) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

export const stringSearch = (val: string, string: string) =>
  string && string.toLowerCase().search(val.toLowerCase()) !== -1;

export function isInViewport(element: any) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export const isAdmin = () => {
  const user = getUser();
  return user.admin && ADMINS_ID.includes(user.admin.roleId);
};

export const hasPermission = (
  userPerm: string[] | undefined,
  permission: string[] | undefined
) => {
  if (userPerm?.length === 0) return true;
  return userPerm?.some(perm => permission?.includes(perm));
};

export const getReportOpenDate = (events: any) => {
  if (!events) return 'NA';
  const openEvent = events.find((evt: any) => evt['event_name'] === 'open');
  if (!openEvent) return 'Not opened yet';

  return format(new Date(openEvent['processed']), 'dd/MM/yyyy');
};

export const getReportUnsub = (events: any) => {
  if (!events) return 'NA';
  const unsubEvent = events.find(
    (evt: any) => evt['event_name'] === 'unsubscribe'
  );
  if (!unsubEvent) return 'No';

  return 'Yes';
};

export const truncateText = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};
