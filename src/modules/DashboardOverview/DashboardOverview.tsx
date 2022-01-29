import { Box } from "@chakra-ui/layout";
import CompanyCard from "../../components/CompanyCard";

const DashboardOverview = () => {
  return (
    <Box>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>
      <h1>Dashboard</h1>

      <Box width="275px" m={10}>
      <CompanyCard
        companyName="Microphone Company"
        users={29}
        leads={223}
        revenue={90}
      />

      </Box>
    </Box>
  );
};

export default DashboardOverview;
