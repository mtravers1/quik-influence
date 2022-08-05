import { Box, Image, BoxProps, createStandaloneToast } from '@chakra-ui/react';
import CustomButton from 'components/Button';
import React, { useState } from 'react';
import { requestToBeAssignedThisCampaign } from 'redux/actions/campaigns';
import { T } from 'types';

interface JoinableCampaignCardProps extends BoxProps {
  campaign: T;
}

const JoinableCampaignCard = ({
  campaign,
  ...rest
}: JoinableCampaignCardProps) => {
  const [loading, setLoading] = useState(false);
  const [requestPending, setRequestPending] = useState(false);
  const toast = createStandaloneToast();

  const handleClick = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await requestToBeAssignedThisCampaign(campaign.id);

      setRequestPending(true);
      toast({
        title: 'Request Sent!.',
        description: 'Admin as been Notified.',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (err: any) {
      toast({
        title: 'Error!',
        description: err?.response?.data?.message,
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
    }

    setLoading(false);
  };

  return (
    <Box
      {...rest}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      height="200px"
      mr={10}
    >
      <Image
        src={campaign.banner}
        alt={campaign.slug}
        height="125"
        objectFit="cover"
        w="100%"
        objectPosition="left"
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          fontSize={14}
          lineHeight="tight"
          noOfLines={1}
        >
          {campaign.name}
        </Box>

        <Box display="flex" mt="2">
          {requestPending || campaign.has_pending === '1' ? (
            <CustomButton
              variant="link"
              p={0}
              my="none"
              mx="none"
              disabled
              fontSize={12}
              justifyContent="left"
            >
              Request Pending
            </CustomButton>
          ) : (
            <CustomButton
              variant="link"
              p={0}
              my="none"
              mx="none"
              onClick={handleClick}
              fontSize={12}
              justifyContent="left"
              isLoading={loading}
            >
              Assign to me
            </CustomButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default JoinableCampaignCard;
