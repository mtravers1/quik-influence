import { Q } from 'types';

const quikColorConstants = {
  // Primary
  greyPrimary: '#fafafb',
  grey: '#F5F8F9',
  greyLight: '#ededed',
  white: '#FFFFFF',
  black: '#171725',
  greyDarker: '#696974',
  greyDark: '#92929D',
  greyLighter: '#A1A2AB',
  influenceRed: '#FF0000',
  influenceRedWithOpacity: '#FC5A5A',
};

export const bgThemeColor: Q = { light: '#FAFAFB', dark: 'gray.800' };
export const themeColor: Q = { light: 'black', dark: 'white' };

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

export default quikColorConstants;
