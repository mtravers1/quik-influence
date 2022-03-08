import { Q } from 'types';

const quikColorConstants = {
  // Primary
  greyPrimary: '#fafafb',
  grey: '#F5F8F9',
  greyLight: '#ededed',
  white: '#FFFFFF',
  black: '#171725',
  greyDarker: '#4A5568',
  greyDark: '#92929D',
  greyLighter: '#A1A2AB',
  influenceRed: '#FF0000',
  influenceRedWithOpacity: '#FC5A5A',
};

export const bgThemeColor: Q = { light: '#F5F8F9', dark: 'gray.800' };
export const sideBarThemeColor: Q = { light: quikColorConstants.white, dark: 'gray.800' };
export const themeColor: Q = { light: 'black', dark: 'white' };

export const dashboardColor: Q = { light: '#F5F8F9', dark: '#333' };

export const sidebarBg: Q = {
  light: quikColorConstants.greyLight,
  dark: quikColorConstants.greyDarker,
};

export const borderThemeColor: Q = {
  light: quikColorConstants.greyDarker,
  dark: quikColorConstants.greyLight,
};

export const cardThemeColor: Q = {
  light: quikColorConstants.white,
  dark: quikColorConstants.greyDarker,
};

export const basicTheme: Q = { light: '#fff', dark: 'gray.800' };
export const basicTextTheme: Q = { light: '#333', dark: '#FFF' };
export const basicDarkTextTheme: Q = { light: '#000', dark: '#fff' };

export const FilterTextTheme: Q = {
  light: quikColorConstants.greyDarker,
  dark: '#fff',
};

export const FilterHeaderTheme: Q = {
  light: quikColorConstants.greyDark,
  dark: '#fff',
};

export const tableBorderTheme: Q = { light: 'gray.700', dark: 'gray.300' };
export const tableTextTheme: Q = { light: 'gray.700', dark: '#gray.300' };

export default quikColorConstants;
