import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { SideBarOptionMenu } from 'types';

export const qrCodeGeneratorMenu: SideBarOptionMenu = {
  name: 'QRCode Generator',
  icon: faQrcode,
  path: '/dashboard/qrcode-generator',
  order: 2,
  permission: [],
  isShown: true,
  isActive: false,
  child: [],
};
