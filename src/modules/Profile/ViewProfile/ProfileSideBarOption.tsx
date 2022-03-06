import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const ProfileMenu: SideBarOptionMenu = {
  name: 'Profile',
  icon: faCalendarMinus,
  path: '/profile',
  order: 2,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
