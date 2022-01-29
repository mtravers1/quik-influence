import { Box } from "@chakra-ui/layout";
import CompanyCard from "components/CompanyCard";
import DropdownSelect from "components/DropdownSelect";

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

        <DropdownSelect options={[
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ]} />
      </Box>
    </Box>
  );
};

export default DashboardOverview;
