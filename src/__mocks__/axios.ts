const mockAxios: any = jest.genMockFromModule('axios');
import { homepageContent } from '../__mockData__/content';
import { CONTENT_URL } from 'utils/constants';

export const getMocks = (url: string) => {
  return new Promise(resolve => {
    const path = url.split('?')[0];
    switch (path) {
      case CONTENT_URL: {
        return resolve({
          data: { data: homepageContent },
        });
      }
      default: {
        return resolve({ data: {} });
      }
    }
  });
};

export const postMocks = (url: string) => {
  return new Promise(resolve => {
    const path = url.split('?')[0];
    switch (path) {
      case '/': {
        return resolve({
          data: {},
        });
      }
      default: {
        return resolve({ data: {} });
      }
    }
  });
};

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.post = postMocks;
mockAxios.get = getMocks;

export default mockAxios;
