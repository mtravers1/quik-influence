import axios from 'axios';

const baseurl = 'https://quik-influence.herokuapp.com';
// const baseurl =
//   process.env.NODE_ENV === "production"
//     ? "https://quik-influence-prod.herokuapp.com"
//     : "https://quik-influence.herokuapp.com";

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});

export const validate = (field: any, Regex: any, pattern: any) => {
  if (pattern.test(field)) return true;
  return false;
};

export const setToken = (token: string) => {
  axiosInstance.interceptors.request.use((config: any) => {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
};
