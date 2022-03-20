import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import MainContent from "components/MainContent";
import Filters from "components/LeadsPageFilters";
import Leads from "modules/Leads";
import { getAllLeads } from "redux/actions/leads";
import { TablePageLoader } from "components/SkeletonLoaders";
import { DEFAULT_PAGE_SIZE } from "utils/constants";

const Dashboard = () => {
  const { allLeads, loading } = useSelector((state: any) => state.leads);
  const router = useRouter();
  const dispatch = useDispatch();
  const socialColumns = router.query.sc as string;
  const page = (router.query.page as string) || "1";
  const pageSize = (router.query.pageSize as string) || DEFAULT_PAGE_SIZE;
  const [selectedFilters, setSelectedFilters] = useState(undefined);

  useEffect(() => {
    // if (page == allLeads?.meta?.currentPage) return;
    dispatch(getAllLeads({ page, pageSize }, { filters: selectedFilters }));
  }, [page, pageSize, selectedFilters]);

  const FiltersComponent = (
    <Filters setAllSelectedFilters={setSelectedFilters} />
  );
  return loading ? (
    <MainContent filter={FiltersComponent}>
      <TablePageLoader />
    </MainContent>
  ) : (
    <MainContent filter={FiltersComponent}>
      <Leads
        leads={allLeads}
        pageType="allLeads"
        socialColumns={socialColumns?.split(",")}
        pageSize={pageSize}
      />
    </MainContent>
  );
};

export default Dashboard;
