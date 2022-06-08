import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
  Heading,
  VStack,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import { useState } from 'react';
import { borderThemeColor } from 'utils/constants/colorConstants';
import AppIntegrationImage from '../AppIntegrationImage';
import { integratedApps } from '../ApplicationsOverview';

const IntegratableAppsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const { colorMode } = useColorMode();
  const [loadingAcceptRequest, setLoadingAcceptRequest] =
    useState<boolean>(false);

  const handleAddApp = () => {};

  return (
    <Modal
      blockScrollOnMount={false}
      size="xl"
      isOpen={isOpen}
      onClose={onClose}
    >
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
            <Heading>Add Apps</Heading>
          </HStack>
          <VStack>
            <Flex mt={6} width="100%" flexWrap="wrap">
              {integratedApps.map(app => (
                <AppIntegrationImage
                  key={app.id}
                  imageSrc={app.src}
                  altText={app.alt}
                />
              ))}
            </Flex>
          </VStack>
          <CustomButton
            mt={20}
            onClick={handleAddApp}
            isLoading={loadingAcceptRequest}
          >
            Accept
          </CustomButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IntegratableAppsModal;
