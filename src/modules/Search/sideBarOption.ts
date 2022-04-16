import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const searchMenu: SideBarOptionMenu = {
  name: 'Search',
  icon: faSearch,
  path: '/dashboard/search',
  order: 5,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
