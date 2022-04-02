import { Box, Heading } from "@chakra-ui/react";
import LeadsForm from "components/Leads/LeadsForm";
import MainContent from "components/MainContent";
import useHasPermission from "hooks/useHasPermission";
import compulsoryFields from "utils/constants/formData/leads";

const CreateLeads = () => {
  useHasPermission(['can_create_leads']);

  return (
    <MainContent>
      <Box maxW={400}>
        <Heading mb={10}>Create Leads</Heading>
        <LeadsForm
          campaignId={""}
          redirectUrl={""}
          form={compulsoryFields}
          paidType={"UNPAID"}
          showConsent={false}
        />
      </Box>
    </MainContent>
  );
};

export default CreateLeads;
