const mockAxios: any = jest.genMockFromModule('axios');
import data from '../__mockData__/content';

export const getMocks = (url: string) => {
  return new Promise(resolve => {
    const path = url.split('?')[0];
    switch (path) {
      case '/content': {
        return resolve({
          data: data.homepage.banner,
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
