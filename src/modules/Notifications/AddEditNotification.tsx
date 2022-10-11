import CustomButton from 'components/Button';
import quikColorConstants, {
  basicTextRgba,
  sidebarBg,
} from 'utils/constants/colorConstants';
import { BellIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { FiSave, FiSend } from 'react-icons/fi';
import { MdCheckCircle } from 'react-icons/md';
import NotificationTabs from './NotificationTabs';
import { axiosInstance, handleErrorResponse } from 'utils/helpers';

const AddEditNotification = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isConfirmOpen,
    onClose: onConfirmClose,
    onOpen: onConfirmOpen,
  } = useDisclosure();

  const [notificationData, setNotificationData] = React.useState(null);
  const [isReadyToSend, setIsReadyToSend] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSendNotification = async () => {
    try {
      onConfirmClose();
      setIsLoading(true);
      const { data } = await axiosInstance.post(
        '/application/pushNotification',
        notificationData
      );
      toast({
        title: 'Notification sent',
        description: 'Notification has been sent successfully',
        status: 'success',
        variant: 'subtle',
        duration: 5000,
        isClosable: true,
      });

      router.push('/dashboard/notifications');
    } catch (err) {
      handleErrorResponse(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box mb="4rem">
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Box fontWeight="semibold">
              <Icon
                mr="0.5rem"
                fontSize="2rem"
                verticalAlign="middle"
                fontWeight="normal"
                color={basicTextRgba[colorMode]}
                as={BellIcon}
              />{' '}
              Send Push Notification
            </Box>
            <Stack direction="row" alignItems="center">
              <Text
                cursor="pointer"
                onClick={() => router.push('/dashboard/notifications')}
              >
                Cancel
              </Text>
              {/* <CustomButton
                w="11rem"
                h="2.5rem"
                bgColor={quikColorConstants.influenceRed}
                fontSize="0.94rem"
                fontWeight="medium"
                borderRadius="3px"
                _focus={{ outline: 'none' }}
                onClick={onOpen}
              >
                Save notification <Icon ml="0.7rem" as={FiSave} />{' '}
              </CustomButton> */}
            </Stack>
          </Flex>
          <Box mt="2rem">
            <Text
              fontSize="1.25rem"
              fontWeight="normal"
              lineHeight="27px"
              w="50%"
            >
              This is the spot where all the magic happens! Create your Push
              Notifications quick and easy with our WYSIWYG editor, and try our
              full{' '}
              <Text
                as="span"
                color={quikColorConstants.influenceRedWithOpacity}
              >
                App Segmentation
              </Text>{' '}
              to send more engaging and targeted Notifications!
            </Text>
          </Box>
        </Box>
        <Box>
          <NotificationTabs
            setIsReadyToSend={setIsReadyToSend}
            setNotificationData={setNotificationData}
          />
        </Box>
      </Box>
      <chakra.footer
        position="fixed"
        w="full"
        minH="1rem"
        p="1rem"
        // pb="3.5rem"
        bottom={0}
        // mt="4rem"
        ml="-2.9rem"
        bg={sidebarBg[colorMode]}
        zIndex={10}
      >
        <Stack direction="row" spacing={5}>
          {/* <CustomButton
            fontSize="1rem"
            fontWeight="medium"
            w="8rem"
            h="2.5rem"
            bgColor={bgThemeColor[colorMode]}
            color={basicTextColor[colorMode]}
            border="1px"
            borderRadius="3px"
            borderColor={borderTransparentThemeColor[colorMode]}
            _focus={{ outline: 'none' }}
          >
            Test now <Icon fontSize="1.2rem" ml="0.5rem" as={CheckIcon} />
          </CustomButton> */}
          <CustomButton
            fontSize="1rem"
            fontWeight="medium"
            w="8rem"
            h="2.5rem"
            borderRadius="3px"
            _focus={{ outline: 'none' }}
            onClick={onConfirmOpen}
            disabled={!isReadyToSend}
            isLoading={isLoading}
          >
            Send <Icon fontSize="1.2rem" ml="0.5rem" as={FiSend} />
          </CustomButton>
        </Stack>
      </chakra.footer>

      <NotificationModal
        text="Notification has been saved successfully"
        isOpen={isOpen}
        onClose={onClose}
      />
      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={onConfirmClose}
        onConfirm={handleSendNotification}
      />
    </>
  );
};

const NotificationModal = ({
  isOpen,
  onClose,
  text,
}: {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="2.5rem" w={{ base: 'auto', md: '500px' }}>
        <ModalHeader textAlign="center">Notification Saved</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack alignItems="center">
            <Icon fontSize="4rem" as={MdCheckCircle} />
            <Text>{text}</Text>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  const cancelRef = React.useRef<any>();

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Confirmation</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>Are you sure you want to submit?</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button colorScheme="red" ml={3} onClick={onConfirm}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddEditNotification;
