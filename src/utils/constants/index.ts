export const CONTENT_URL = '/content';
export const Q_TOKEN = '_q_inf';
export const DEFAULT_PAGE_SIZE = '100';
export const ADMINS_ID = [2];

export const FILE_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  UPLOADING: 'uploading',
  PAUSED: 'paused',
  COMPLETED: 'completed',
  FAILED: 'failed',
  IDLE: 'idle',
};

export const headers: string[] = [
  'phone',
  'avatar',
  'email',
  'firstName',
  'lastName',
  'address',
  'city',
  'dateOfBirth',
  'instagramId',
  'socialMediaHandle',
  'state',
  'country',
  'postalCode',
  'gender',
  'address2',
  'address3',
  'facebookHandle',
  'tiktokHandle',
  'twitterHandle',
];

export const formDataRelatedToSpecificUser = [
  'updatedAt',
  'twitterHandle',
  'avatar',
  'phone',
  'address2',
  'email',
  'address1',
  'postalCode',
  'socialMediaHandle',
  'lastName',
  'firstName',
  'instagramId',
  'tiktokHandle',
  'address',
  'address3',
  'facebookHandle',
];

export const MARKETING_ADMIN = ['can_approve_or_reject_campaign'];
export const ADMIN_USER_AFFILIATE = ['can_get_joinable_campaigns'];
export const CAN_HANDLE_INFLUENCERS = ['can_manage_influencers'];

export const MARKET_PLACE_NEW_PRODUCTS = 'new';
export const MARKET_PLACE_POPULAR_PRODUCTS = 'popular';

export const CART_CLICK_NAME = 'cart';
