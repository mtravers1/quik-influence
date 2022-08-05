import { Box, Flex, Heading, createStandaloneToast } from '@chakra-ui/react';
import Image from 'next/image';
import LoaderGif from 'assets/loader.gif';
import { useEffect, useState } from 'react';
import { getPendingCampaigns } from 'redux/actions/campaigns';
import PendingCampaignListItem from './PendingCampaignListItem';

const PendingCampaignRequest = () => {
  const [pendingCampaigns, setPendingCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = createStandaloneToast();

  const refreshPendingList = async () => {
    setLoading(true);
    try {
      const campaigns = await getPendingCampaigns();
      setPendingCampaigns(campaigns);
    } catch (err: any) {
      toast({
        title: err?.response?.data?.message || err.message,
        status: 'error',
        duration: 9000,
        position: 'top-right',
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    refreshPendingList();
  }, []);

  if (pendingCampaigns && pendingCampaigns.length) {
    return (
      <Box mt={20}>
        <Box mt={[6]} mb={[6]}>
          <Heading size="xl">Pending Campaigns Request</Heading>
        </Box>

        <Flex flexDirection="column">
          {loading && (
            <Box alignSelf="center">
              <Image
                width={100}
                height={100}
                objectFit="contain"
                src={LoaderGif}
              />
            </Box>
          )}
          {pendingCampaigns.map((pendingCampaign: any) => (
            <PendingCampaignListItem
              key={pendingCampaign.id}
              campaign={pendingCampaign}
              onComplete={refreshPendingList}
            />
          ))}
        </Flex>
      </Box>
    );
  }
  return null;
};

export default PendingCampaignRequest;
