import { Box } from '@chakra-ui/layout';
import CustomButton from 'components/Button';
import CompanyCard from 'components/CompanyCard';
import Filter from 'components/Filter';

const DashboardOverview = () => {
  return (
    <Box>
      <Box width="275px" m={10}>
        <CompanyCard
          companyName="Microphone Company"
          users={29}
          leads={223}
          revenue={90}
        />

        <br />
        <CustomButton>Send Contact </CustomButton>
        <br />
        <br />
        <CustomButton variant="outline">Send Contact </CustomButton>
        <br />
        <br />
        <CustomButton variant="gray">Send Contact </CustomButton>
        <br />
        <br />
        <Filter />
        <br />
      </Box>
    </Box>
  );
};

export default DashboardOverview;
