import { useSelector } from 'react-redux';
import { dashboardMenu, creditsMenu } from './Dashboard';
import { campaignsMenu } from './Campaigns';
import { leadMenu } from './Leads';
import { searchMenu } from './Search';
import { qrCodeGeneratorMenu } from './QrcodeGenerator';

export const useSideBarMenuOptions = () => {
  const { firstCampaigns } = useSelector((state: any) => state.campaigns);

  return {
    dashboardMenu,
    campaignsMenu: { ...campaignsMenu, child: firstCampaigns || [] },
    creditsMenu,
    leadMenu,
    searchMenu,
    qrCodeGeneratorMenu

  };
};

export const SideBarMenuOptions = {
  dashboardMenu,
  campaignsMenu,
  creditsMenu,
  leadMenu,
  searchMenu,
  qrCodeGeneratorMenu
};
