import {
  faCalendarMinus,
  faGripHorizontal,
} from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const campaignsMenu: SideBarOptionMenu = {
  name: 'Campaigns',
  icon: faCalendarMinus,
  path: '/dashboard/campaigns',
  order: 2,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};

export const createCampaignsMenu: SideBarOptionMenu = {
  name: 'Create Campaign',
  icon: faCalendarMinus,
  path: '/dashboard/campaigns/create',
  order: 2,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};

export const campaignInfluencersMenu: SideBarOptionMenu = {
  name: 'Influencers',
  icon: faCalendarMinus,
  path: '/dashboard/influencers',
  order: 2,
  permission: ['can_manage_influencers'],
  isShown: true,
  isActive: false,
  child: [],
};
