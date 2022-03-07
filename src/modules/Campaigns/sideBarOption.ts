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
  child: [
    {
      name: 'Jude',
      path: '/dashboard/campaigns/leads/ead941c0-2afe-4299-952e-e7f3911fabba',
    },
  ],
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
