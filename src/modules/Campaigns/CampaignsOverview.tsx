import React from 'react';
import {
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from 'components/Button';
import { useRouter } from 'next/router';
import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';
import { campaignCreations } from 'utils/constants/campaignCreationConstants';
import CurrentCampaignsTable from './CurrentCampaignsTable';
import PreCreatedCampaigns from './components/PreCreatedCampaigns';
import PendingCampaignRequest from './components/PendingCampaignRequest';
import { useSelector } from 'react-redux';
import { hasPermission } from 'utils/helpers';
import { ADMIN_USER_AFFILIATE, MARKETING_ADMIN } from 'utils/constants';

type CampaignSendTypes = 'Email' | 'SMS' | 'Default';

const CampaignsOverview = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const permissions = useSelector((state: any) => state.auth.permissions);

  console.log(permissions);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateCampaign = (type: CampaignSendTypes | string) => {
    onClose();

    switch (type) {
      case 'SMS':
        return router.push('/dashboard/campaigns/create/sms');
      case 'Email':
        return router.push('/dashboard/campaigns/create/email');
      default:
        router.push('/dashboard/campaigns/create');
    }
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW="40vw"
          minH="30vh"
          p="8"
          border={`1px solid ${borderThemeColor[colorMode]}`}
          borderRadius={0}
        >
          <ModalBody>
            <HStack mb="10" height="100%">
              <Heading>Select a type of Campaign</Heading>
            </HStack>
            <HStack>
              {campaignCreations.map(campaignCreation => (
                <Flex
                  key={`capign_creation_${campaignCreation.name}`}
                  border={`1px solid ${quikColorConstants.influenceRedWithOpacity}`}
                  w="100%"
                  h="6rem"
                  borderRadius="md"
                  justifyContent="space-evenly"
                  alignItems="center"
                  cursor="pointer"
                  _hover={{
                    bg: quikColorConstants.grey,
                  }}
                  onClick={() => handleCreateCampaign(campaignCreation.label)}
                >
                  <FontAwesomeIcon
                    icon={campaignCreation.icon as IconProp}
                    fontSize={20}
                    color={quikColorConstants.influenceRed}
                  />
                  <Text fontWeight="bold">{campaignCreation.label}</Text>
                </Flex>
              ))}
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex flexDirection="column">
        <Flex mb={20} flexDirection="row" justifyContent="space-between">
          <Heading alignSelf="center" size="xl">
            {' '}
            Campaigns Dashboard
          </Heading>
          <CustomButton width="25rem" my="0" onClick={onOpen}>
            <FontAwesomeIcon
              icon={faPlus as IconProp}
              style={{ paddingRight: '1rem' }}
            />
            Create a New Campaign
          </CustomButton>
        </Flex>

        {hasPermission(ADMIN_USER_AFFILIATE, permissions) && (<PreCreatedCampaigns />)}
        {hasPermission(MARKETING_ADMIN, permissions) && (
          <PendingCampaignRequest />
        )}

        <Flex flexDirection="column" mt="12">
          <CurrentCampaignsTable />
        </Flex>
      </Flex>
    </>
  );
};

export default CampaignsOverview;
