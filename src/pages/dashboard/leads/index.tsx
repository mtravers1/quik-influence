import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import Filters from 'components/LeadsPageFilters';
import Leads from 'modules/Leads';
import { getAllLeads } from 'redux/actions/leads';
import { TablePageLoader } from 'components/SkeletonLoaders';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import Head from 'next/head';

const Dashboard = () => {
  const { allLeads, loading } = useSelector((state: any) => state.leads);
  const router = useRouter();
  const dispatch = useDispatch();
  const page = (router.query.page as string) || '1';
  const pageSize = (router.query.pageSize as string) || DEFAULT_PAGE_SIZE;
  const [selectedFilters, setSelectedFilters] = useState(undefined);

  useEffect(() => {
    dispatch(getAllLeads({ page, pageSize }, { filters: selectedFilters }));
  }, [page, pageSize, selectedFilters]);

  const FiltersComponent = (
    <Filters
      pageType="LEADS_DATA_POINTS"
      setAllSelectedFilters={setSelectedFilters}
    />
  );

  return (
    <>
      <Head>
        <title>Leads - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent filter={FiltersComponent}>
        {loading ? (
          <TablePageLoader />
        ) : (
          <Leads leads={allLeads} pageType="allLeads" pageSize={pageSize} />
        )}
      </MainContent>
    </>
  );
};

export default Dashboard;
