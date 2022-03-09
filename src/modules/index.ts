import { useSelector } from 'react-redux';
import { dashboardMenu, creditsMenu } from './Dashboard';
import { campaignsMenu } from './Campaigns';
import { leadMenu } from './Leads';

export const useSideBarMenuOptions = () => {
  const { firstCampaigns } = useSelector((state: any) => state.campaigns);

  return {
    dashboardMenu,
    campaignsMenu: { ...campaignsMenu, child: firstCampaigns || [] },
    creditsMenu,
    leadMenu,
  };
};

export const SideBarMenuOptions = {
  dashboardMenu,
  campaignsMenu,
  creditsMenu,
  leadMenu,
};
