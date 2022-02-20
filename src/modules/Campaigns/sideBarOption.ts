import { faCalendarMinus, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const campaignsMenu: SideBarOptionMenu = {
  name: 'Campaigns',
  icon: faCalendarMinus,
  path: '/campaigns',
  order: 2,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
