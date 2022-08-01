import {
  useDisclosure,
  Flex,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  createStandaloneToast,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import ComfirmAlertDialog from 'components/ComfirmAlertDialog';
import { modifyCampaignRequest } from 'redux/actions/campaigns';
import AcceptRequestModal from './AcceptRequestModal';

const PendingCampaignListItem = ({
  campaign,
  onComplete,
}: {
  campaign: any;
  onComplete: () => void;
}) => {
  const toast = createStandaloneToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const handleCancel = async () => {
    const res = await modifyCampaignRequest({
      campaignAdminId: campaign.id,
      status: 'REJECT',
    });
    if (!res.id) {
      toast({
        title: 'Request Declined!',
        description: `An email has been sent to ${campaign.Admin.firstName}!`,
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      onComplete();
      onAlertClose();
    }
  };

  return (
    <>
      <AcceptRequestModal
        isOpen={isOpen}
        onClose={onClose}
        adminName={campaign.Admin.firstName}
        campaignAdminId={campaign.id}
        onComplete={onComplete}
      />
      <ComfirmAlertDialog
        title="Decline Request"
        isOpen={isAlertOpen}
        onClose={onAlertClose}
        onDecline={handleCancel}
        message="Are you sure? You can't undo this action afterwards."
        buttonText="Decline"
      />
      <Flex py={6} w="100%" justifyContent="space-between">
        <Flex mr={6} w="50%" justifyContent="space-between">
          <Text mr={6}>
            <b>{campaign.Admin.firstName}</b> wants to join{' '}
            <b>{campaign.Campaign.name}</b>
          </Text>
        </Flex>
        <Flex w="20%">
          <CustomButton
            variant="link"
            p={0}
            my="none"
            mx="none"
            onClick={onOpen}
            fontSize={12}
            justifyContent="left"
            color="green"
          >
            Accept
          </CustomButton>
          <CustomButton
            variant="link"
            p={0}
            my="none"
            mx="none"
            onClick={onAlertOpen}
            fontSize={12}
            justifyContent="left"
          >
            Decline
          </CustomButton>
        </Flex>
      </Flex>
    </>
  );
};

export default PendingCampaignListItem;
