import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
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
