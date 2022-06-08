import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { SideBarOptionMenu } from "types";

export const applicationsMenu: SideBarOptionMenu = {
  name: 'Applications',
  icon: faGripHorizontal,
  path: '/dashboard/applications',
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
