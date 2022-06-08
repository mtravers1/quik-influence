import { useSelector } from 'react-redux';
import { dashboardMenu, creditsMenu } from './Dashboard';
import { campaignsMenu } from './Campaigns';
import { leadMenu } from './Leads';
import { searchMenu } from './Search';
import { applicationsMenu } from './Applications';

export const useSideBarMenuOptions = () => {
  const { firstCampaigns } = useSelector((state: any) => state.campaigns);

  return {
    dashboardMenu,
    campaignsMenu: { ...campaignsMenu, child: firstCampaigns || [] },
    creditsMenu,
    leadMenu,
    searchMenu,
    applicationsMenu,
  };
};

export const SideBarMenuOptions = {
  dashboardMenu,
  campaignsMenu,
  creditsMenu,
  leadMenu,
  searchMenu,
  applicationsMenu,
};
