import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const leadMenu: SideBarOptionMenu = {
  name: 'Leads',
  icon: faUserPlus,
  path: '/dashboard/leads',
  order: 2,
  permission: ['can_get_all_leads'],
  isShown: true,
  isActive: false,
  child: [
    {
      name: 'Create Lead',
      path: '/dashboard/leads/create',
      permission: ['can_create_leads'],
    },
    {
      name: 'Upload Leads',
      path: '/dashboard/leads/upload',
      permission: [],
    },
  ],
};
