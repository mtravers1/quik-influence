import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import Filters from 'components/LeadsPageFilters';
import Leads from 'modules/Leads';
import { getAllLeads } from 'redux/actions/leads';
import { TablePageLoader } from 'components/SkeletonLoaders';

const Dashboard = () => {
  const { allLeads, loading } = useSelector((state: any) => state.leads);
  const router = useRouter();
  const dispatch = useDispatch();

  const page = router.query.page as string;

  useEffect(() => {
    dispatch(getAllLeads({ page }));
  }, [page]);

  return loading ? (
    <MainContent>
      <TablePageLoader />
    </MainContent>
  ) : (
    <MainContent filter={<Filters />}>
      <Leads leads={allLeads} pageType="allLeads" />
    </MainContent>
  );
};

export default Dashboard;
