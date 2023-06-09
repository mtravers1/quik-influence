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
  const { leads, loading } = useSelector((state: any) => state.campaigns);
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState(undefined);

  const campaignId = router.query.campaignId as string;
  const page = router.query.page as string;
  const pageSize = (router.query.pageSize as string) || DEFAULT_PAGE_SIZE;
  const sortBy = router.query.sortBy as string;
  const campaignsLeads = leads[campaignId];

  useEffect(() => {
    dispatch(
      getCampaignLeads(campaignId, page, pageSize, sortBy, {
        filters: selectedFilters,
      })
    );
  }, [page, pageSize, sortBy, selectedFilters]);

  const FiltersComponent = (
    <Filters setAllSelectedFilters={setSelectedFilters} />
  );

  return (
    <>
      <Head>
        <title>Campaign leads - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent filter={FiltersComponent}>
        {loading ? (
          <TablePageLoader />
        ) : (
          <Leads
            leads={campaignsLeads}
            pageSize={pageSize}
          />
        )}
      </MainContent>
    </>
  );
};

export default CampaignsLeads;
