import { SideBarOptionMenu } from 'types';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export const notificationMenu: SideBarOptionMenu = {
  name: 'Notifications',
  icon: faBell,
  path: '/dashboard/notifications',
  order: 1,
  permission: [],
  isShown: true,
  isActive: false,
  child: [
    {
      name: 'Create new',
      icon: faBell,
      path: '/dashboard/notifications/create',
      order: 1,
      permission: [],
      isShown: true,
      isActive: false,
    },
    {
      name: 'Scheduled',
      icon: faBell,
      path: '/dashboard/notifications/scheduled',
      order: 2,
      permission: [],
      isShown: true,
      isActive: false,
    }
  ],
}
