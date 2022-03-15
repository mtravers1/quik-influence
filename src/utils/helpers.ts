import axios from "axios";
import { omitBy, isNil } from "lodash";
import { Q_TOKEN } from "./constants";

const baseurl = process.env.NEXT_PUBLIC_BACKEND_URL;

import { DropdownSelectOption } from "components/DropdownSelect";
import { FilterDataProps } from "types";

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type",
    "Access-Control-Allow-Origin": "*"
  }
});

export const logout = () => {
  localStorage.removeItem(Q_TOKEN);
  window.location.href = "/login";
};

export const validate = (field: any, pattern: any) => {
  const parts = /\/(.*)\/(.*)/.exec(pattern) || [];
  var restoredRegex = new RegExp(parts[1], parts[2]);
  if (restoredRegex.test(field)) return true;
  return false;
};

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common["token"] = token;

  if (typeof window !== "undefined") {
    localStorage.setItem(Q_TOKEN, token);
  }
};

const tokens: any = {};

export function parseJwt(token: any) {
  if (!token) return;
  if (tokens[token]) return tokens[token];

  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      // Buffer.from(base64, 'base64')
      .split("")
      .map((c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const result = JSON.parse(jsonPayload);
  tokens[token] = result;

  return result;
}

export function getUser() {
  let user;
  let ctoken;

  if (typeof window !== "undefined") {
    ctoken = localStorage.getItem(Q_TOKEN);
  }

  if (ctoken !== 'null') {
    user = parseJwt(ctoken);
  }

  return { admin: user, token: ctoken };
}

export const getNumberRange = (
  start: number,
  stop: number,
  step: number
): DropdownSelectOption[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => ({
    label: (start + i * step).toString(),
    value: (start + i * step).toString()
  }));

export const getQueryString = (params?: FilterDataProps) => {
  const paramsFilters = omitBy(params, isNil);
  const query = Object.keys(paramsFilters)
    .map(
      (k) => encodeURIComponent(k) + "=" + encodeURIComponent(paramsFilters[k])
    )
    .join("&");
  return query;
};

export const getSocialHandleHeader = (socialColumns: string[]): string[] => {
  let socialHeader: string[] = [];
  socialColumns.forEach((socialColumn: any) => {
    switch (socialColumn) {
      case "facebookHandle":
        socialHeader.push("Facebook");
        break;
      case "twitterHandle":
        socialHeader.push("Twitter");
        break;
      case "instagramId":
        socialHeader.push("Instagram");
        break;
      case "tiktokHandle":
        socialHeader.push("Tik Tok");
        break;
      default:
        break;
    }
  });
  return socialHeader;
};