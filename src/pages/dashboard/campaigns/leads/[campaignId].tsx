import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import Filters from 'components/LeadsPageFilters';
import { TablePageLoader } from 'components/SkeletonLoaders';
import { getCampaignLeads } from 'redux/actions/campaigns';
import Leads from 'modules/Leads';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import Head from 'next/head';

const CampaignsLeads = () => {
  const { leads } = useSelector((state: any) => state.campaigns);
  const router = useRouter();
  const dispatch = useDispatch();

  const campaignId = router.query.campaignId as string;
  const page = router.query.page as string;
  const socialColumns = router.query.sc as string;
  const pageSize = (router.query.pageSize as string) || DEFAULT_PAGE_SIZE;

  const campaignsLeads = leads[campaignId];
  const [loading, setLoading] = useState(!campaignsLeads);

  const fetchCampaignsLeads = async () => {
    setLoading(true);
    dispatch(getCampaignLeads(campaignId, page, pageSize));
    setLoading(false);
  };

  useEffect(() => {
    // if (page == leads?.meta?.currentPage) return;
    fetchCampaignsLeads();
  }, [page, pageSize]);

  return (
    <>
      <Head>
        <title>Campaign leads - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loading ? (
        <MainContent>
          <TablePageLoader />
        </MainContent>
      ) : (
        <MainContent filter={<Filters setAllSelectedFilters={() => {}} />}>
          <Leads leads={campaignsLeads} pageSize={pageSize} />
        </MainContent>
      )}
    </>
  );
};

export default CampaignsLeads;
