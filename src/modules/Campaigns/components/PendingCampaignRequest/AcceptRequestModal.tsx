import {
  useColorMode,
  createStandaloneToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import { useState } from 'react';
import { modifyCampaignRequest } from 'redux/actions/campaigns';
import { borderThemeColor } from 'utils/constants/colorConstants';

const AcceptRequestModal = ({
  adminName,
  isOpen,
  onClose,
  campaignAdminId,
  onComplete,
}: {
  adminName: string;
  isOpen: any;
  onClose: any;
  campaignAdminId: string;
  onComplete: () => void;
}) => {
  const { colorMode } = useColorMode();
  const toast = createStandaloneToast();
  const [loadingAcceptRequest, setLoadingAcceptRequest] =
    useState<boolean>(false);
  const [lpCampaignId, setLPCampaignId] = useState<string>('');
  const [lpCampaignIdError, setLPCampaignIdError] = useState<string>('');
  const [lpCampaignKey, setLPCampaignKey] = useState<string>('');
  const [lpCampaignKeyError, setLPCampaignKeyError] = useState<string>('');

  const handleAcceptCampaign = async () => {
    if (lpCampaignId && lpCampaignKey) {
      setLoadingAcceptRequest(true);
      try {
        await modifyCampaignRequest({
          campaignAdminId,
          lp_campaign_id: lpCampaignId,
          lp_campaign_key: lpCampaignKey,
          status: 'ACTIVE',
        });

        toast({
          title: 'Request Approved!',
          description: `An email has been sent to ${adminName}!`,
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
        onComplete();
        onClose();
      } catch (err: any) {
        toast({
          title: err?.response?.data?.message || err.message,
          status: 'error',
          duration: 9000,
          position: 'top-right',
        });
      }

      setLoadingAcceptRequest(false);
    }

    if (!lpCampaignId) {
      setLPCampaignIdError('Campaign Id Required');
    }
    if (!lpCampaignKey) {
      setLPCampaignKeyError('Campaign Key Required');
    }
  };

  return (
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
            <Heading>Accept {adminName}'s Request</Heading>
          </HStack>
          <VStack>
            <TextInput
              error={lpCampaignIdError}
              name={'lp_campaign_id'}
              label={'Leads Pedia Campaign Id'}
              value={lpCampaignId}
              formControlProps={{
                pt: 8,
                maxW: '60rem',
              }}
              handleChange={(e: any) => setLPCampaignId(e.target.value)}
              type={'text'}
              placeholder={'LP Campaign Id'}
              TextInputProps={{}}
            />
            <TextInput
              error={lpCampaignKeyError}
              name={'lp_campaign_key'}
              label={'Leads Pedia Campaign Key'}
              value={lpCampaignKey}
              formControlProps={{
                pt: 8,
                maxW: '60rem',
              }}
              handleChange={(e: any) => setLPCampaignKey(e.target.value)}
              type={'text'}
              placeholder={'LP Campaign Key'}
              TextInputProps={{}}
            />
          </VStack>
          <CustomButton
            mt={20}
            onClick={handleAcceptCampaign}
            isLoading={loadingAcceptRequest}
          >
            Accept
          </CustomButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AcceptRequestModal;
