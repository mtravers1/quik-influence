import { useSelector } from 'react-redux';
import { dashboardMenu, creditsMenu } from './Dashboard';
import { campaignsMenu, campaignInfluencersMenu } from './Campaigns';
import { leadMenu } from './Leads';
import { searchMenu } from './Search';

export const useSideBarMenuOptions = () => {
  const { firstCampaigns } = useSelector((state: any) => state.campaigns);

  return {
    dashboardMenu,
    campaignsMenu: { ...campaignsMenu, child: firstCampaigns || [] },
    campaignInfluencersMenu,
    creditsMenu,
    leadMenu,
    searchMenu,
  };
};

export const SideBarMenuOptions = {
  dashboardMenu,
  campaignInfluencersMenu,
  campaignsMenu,
  creditsMenu,
  leadMenu,
  searchMenu,
};
