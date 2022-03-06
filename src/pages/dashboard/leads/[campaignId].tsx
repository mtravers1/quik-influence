import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import Filters from 'components/LeadsPageFilters';
import { TablePageLoader } from 'components/SkeletonLoaders';
import { getCampaignLeads } from 'redux/actions/campaigns';
import Leads from 'modules/Leads';

const CampaignsLeads = () => {
  const { leads } = useSelector((state: any) => state.campaigns);
  const router = useRouter();
  const dispatch = useDispatch();

  const campaignId = router.query.campaignId as string;
  const page = router.query.page as string;

  const campaignsLeads = leads[campaignId];
  const [loading, setLoading] = useState(!campaignsLeads);

  const fetchCampaignsLeads = async () => {
    setLoading(true);

    await dispatch(getCampaignLeads(campaignId, page));

    setLoading(false);
  };

  useEffect(() => {
    if (!campaignsLeads) {
      fetchCampaignsLeads();
    }
  }, [loading, campaignsLeads]);

  return loading ? (
    <MainContent>
      <TablePageLoader />
    </MainContent>
  ) : (
    <MainContent filter={<Filters />}>
      <Leads leads={campaignsLeads} />
    </MainContent>
  );
};

export default CampaignsLeads;
