import axios from 'axios';

const baseurl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://quik-influence.herokuapp.com';

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});
