import { faGripHorizontal, faCreditCard, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const dashboardMenu: SideBarOptionMenu = {
  name: 'Overview',
  icon: faGripHorizontal,
  path: '/dashboard',
  order: 1,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
export const creditsMenu: SideBarOptionMenu = {
  name: 'Credits',
  icon: faCreditCard,
  path: '/dashboard/credits',
  order: 1,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
export const leadsMenu: SideBarOptionMenu = {
  name: 'Leads',
  icon: faUserPlus,
  path: '/dashboard/leads',
  order: 1,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
