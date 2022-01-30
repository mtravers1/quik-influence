import { Box, Text } from "@chakra-ui/layout";
import CustomButton from "../../components/Button";
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

        <br />
        <CustomButton>Send Contact </CustomButton>
        <br />
        <br />
        <br />
        <CustomButton variant="outline">Send Contact </CustomButton>
        <br />
        <br />
        <CustomButton variant="gray">Send Contact </CustomButton>

      </Box>
    </Box>
  );
};

export default DashboardOverview;
