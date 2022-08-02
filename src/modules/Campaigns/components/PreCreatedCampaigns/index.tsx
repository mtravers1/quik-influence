import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getJoinableCampaigns } from 'redux/actions/campaigns';
import LoaderGif from 'assets/loader.gif';
import JoinableCampaignCard from './JoinableCampaignCard';
import { T } from 'types';

const PreCreatedCampaigns = () => {
  const dispatch = useDispatch();
  const {
    campaigns: {
      joinableCampaigns: { data, loading },
    },
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(getJoinableCampaigns());
  }, []);

  return (
    <Flex flexDirection="column">
      <Box mt={[6]} mb={[6]}>
        <Heading size="xl">Join a Campaign</Heading>
      </Box>

      {loading ? (
        <Box alignSelf="center">
          <Image width={100} height={100} objectFit="contain" src={LoaderGif} />
        </Box>
      ) : (
        <Flex
          display="-webkit-inline-box"
          w="100%"
          flexDirection="row"
          overflowX="scroll"
        >
          {data &&
            data.length !== 0 &&
            data.map((joinableCampaign: T) => {
              return (
                <JoinableCampaignCard
                  key={joinableCampaign.id}
                  campaign={joinableCampaign}
                />
              );
            })}
        </Flex>
      )}
    </Flex>
  );
};

export default PreCreatedCampaigns;
