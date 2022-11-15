import React from 'react';
import {
  HStack,
  VStack,
  Heading,
  Flex,
  Text,
  useColorMode,
  useToast,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Textarea,
  Switch,
  Spacer,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/leadSMS';
import CustomButton from 'components/Button';

import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';
import { authSelectors } from 'redux/selectors';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fetchPostJSON } from 'utils/apiHelpers';

type LeadSendTypes = 'email' | 'sms';

const DashboardLeads = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const user = useSelector(authSelectors.getUser);

  const [choosenLeadSendtype, setChoosenLeadSendtype] =
    React.useState<LeadSendTypes | null>();

  const {
    handleChange,
    inputTypes,
    handleSubmit,
    errors,
    loading,
    resetInputs,
  } = useForm({
    inputs: formdata,
    cb: async inputs => {
      if (choosenLeadSendtype === 'email') {
        // Send Email
        const response = await fetchPostJSON('/api/send_email', {
          subject: 'QuickInfluence Lead Email Testing',
          to: user?.email || 'mojaray2k@gmail.com',
          body: inputs.message,
        });

        if (response.statusCode === 500) {
          throw new Error(response.message);
        }

        if (response.status === 'success') {
          toast({
            title: 'Email Successfully Sent.',
            description: `The lead has been successfully sent.`,
            duration: 4000,
            isClosable: true,
            variant: 'top-accent',
          });
        }

        return resetInputs();
      }

      if (choosenLeadSendtype === 'sms') {
        // Send SMS.
        const response = await fetchPostJSON('/api/messages', {
          to: user.phone || '+12026078069',
          body: inputs.message,
        });

        if (response.statusCode === 500) {
          throw new Error(response.message);
        }

        if (response.status === 'success') {
          toast({
            title: 'SMS Successfully Sent.',
            description: `The lead has been successfully sent.`,
            duration: 4000,
            isClosable: true,
            variant: 'top-accent',
          });
        }

        return resetInputs();
      }
    },
  });

  const handleSendLead = (type: LeadSendTypes) => {
    setChoosenLeadSendtype(type);
    onOpen();
  };

  return (
    <Flex
      flexDir={{ base: 'column', md: 'column', lg: 'row' }}
      width="full"
      maxW="2000px"
    >
      <Button onClick={() => handleSendLead('sms')} variant="solid">
        Send Lead as SMS
      </Button>
      <Button onClick={() => handleSendLead('email')} variant="solid">
        Send Lead as Email
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW="60vw"
          minH="70vh"
          p="8"
          border={`1px solid ${borderThemeColor[colorMode]}`}
          borderRadius={0}
        >
          <ModalBody>
            <HStack spacing="8" height="100%">
              <FontAwesomeIcon
                icon={faComment as IconProp}
                fontSize={30}
                color={quikColorConstants.influenceRed}
              />

              <Heading>{choosenLeadSendtype?.toUpperCase()} - </Heading>
            </HStack>
            <VStack width="100%" mt="16">
              <Heading size="md" as="span" mb="8px" alignSelf="flex-start">
                {formdata[0].label}
              </Heading>
              <Textarea
                name={formdata[0].name}
                size="sm"
                value={inputTypes[formdata[0].name]}
                placeholder={formdata[0].placeholder}
                onChange={handleChange}
                resize="none"
                borderRadius={6}
              />
            </VStack>

            <Flex
              flexDir={{ base: 'column-reverse', md: 'row' }}
              mt="28"
              // width="100%"
              // alignItems={{ base: 'center', md: 'flex-end' }}
            >
              <Flex
                flexDir={{ base: 'row-reverse', md: 'column' }}
                alignItems={{ base: 'center', md: 'flex-start' }}
                justifyContent="center"
                // py="8"
              >
                <Text fontSize={{ base: 'sm', md: 'xl' }} fontWeight="bold">
                  Auto re-send after 3 days unopened
                </Text>
                <Switch size="lg" variant="brand" py="4" pr="4" pb="0" />
              </Flex>
              <Spacer />
              <VStack spacing={[4, 4, 8]}>
                <CustomButton
                  height={30}
                  width="sm"
                  padding={'0.2rem'}
                  fontSize={10}
                  onClick={handleSubmit}
                  isLoading={loading}
                  disabled={loading}
                >
                  Re-Send Message
                </CustomButton>
                <CustomButton
                  width="sm"
                  height={30}
                  padding={'0.2rem'}
                  fontSize={10}
                  disabled={loading}
                >
                  Delete Message
                </CustomButton>
                <CustomButton
                  width="sm"
                  height={30}
                  padding={'0.2rem'}
                  fontSize={10}
                  disabled={loading}
                >
                  Save To Drafts
                </CustomButton>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default DashboardLeads;
