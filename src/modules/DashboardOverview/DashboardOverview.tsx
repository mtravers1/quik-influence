import { Box } from "@chakra-ui/layout";
import CustomButton from "../../components/Button";
import CompanyCard from "../../components/CompanyCard"; 
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

        <br />
        <CustomButton>Send Contact </CustomButton>
        <br />
        <br />
        <br />
        <CustomButton variant="outline">Send Contact </CustomButton>
        <br />
        <br />
        <CustomButton variant="gray">Send Contact </CustomButton>

        <DropdownSelect options={[
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ]} />
      </Box>
    </Box>
  );
};

export default DashboardOverview;
