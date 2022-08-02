import { Box, Heading } from '@chakra-ui/react';
import LeadsForm from 'components/Leads/LeadsForm';
import MainContent from 'components/MainContent';
import useHasPermission from 'hooks/useHasPermission';
import Head from 'next/head';
import compulsoryFields from 'utils/constants/formData/leads';

const CreateLeads = () => {
  useHasPermission(['can_create_leads']);

  return (
    <>
      <Head>
        <title>Create a lead - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <Box maxW={400}>
          <Heading mb={10}>Create Leads</Heading>
          <LeadsForm
            campaignId={''}
            redirectUrl={''}
            form={compulsoryFields}
            paidType={'UNPAID'}
            showConsent={false}
          />
        </Box>
      </MainContent>
    </>
  );
};

export default CreateLeads;
