import { Box, Flex, Heading } from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from 'components/Button';
import { useRouter } from 'next/router';
import CurrentCampaigns from './CurrentCampaigns';

const CampaignsOverview = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push('/dashboard/campaigns/create');
  };

  return (
    <Flex flexDirection="column">
      <Heading size="xl"> Campaigns Dashboard</Heading>
      <CustomButton width="25rem" my="12" onClick={handleButton}>
        <FontAwesomeIcon
          icon={faPlus as IconProp}
          style={{ paddingRight: '1rem' }}
        />
        Create a New Campaign
      </CustomButton>
      <CurrentCampaigns />
    </Flex>
  );
};

export default CampaignsOverview;
