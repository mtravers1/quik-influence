import MainContent from 'components/MainContent';
import Filters from 'components/LeadsPageFilters';
import Leads from 'modules/Leads';

const Dashboard = () => {
  return (
    <MainContent filter={<Filters />}>
      <Leads />
    </MainContent>
  );
};

export default Dashboard;
