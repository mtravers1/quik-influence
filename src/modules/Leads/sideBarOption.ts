import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const leadMenu: SideBarOptionMenu = {
  name: 'Leads',
  icon: faUserPlus,
  path: '/dashboard/leads',
  order: 2,
  permission: [],
  isShown: true,
  isActive: false,
  child: [
    {
      name: 'Upload Leads',
      path: '/dashboard/leads/upload',
    },
  ],
};
