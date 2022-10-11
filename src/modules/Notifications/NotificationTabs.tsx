import {
  Box,
  Flex,
  Icon,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
  useToast,
  HStack,
  Input,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalFooter,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsChatLeftText,
} from 'react-icons/bs';
import { GoCalendar, GoInfo } from 'react-icons/go';
// @ts-ignore
import timezones from 'google-timezones-json';

import CustomButton from 'components/Button';
import CustomImage from 'components/Image';
import TruncatedText from 'components/TruncatedText';
import LEColorConstants, {
  basicTextColor,
  basicTextRgba,
  dashboardColor,
} from 'utils/constants/colorConstants';
import Compose from './components/Compose';
import Summary from './components/Summary';
import quikColorConstants from 'utils/constants/colorConstants';
import { axiosInstance } from 'utils/helpers';
import formdata from 'utils/constants/formData/notifier';
import useForm from 'hooks/useForm';
import DropdownSelect from 'components/DropdownSelect';
import DurationInput from './components/DurationInput';

const TABS = [
  {
    id: 1,
    tablist: 'Compose',
  },
  {
    id: 2,
    tablist: 'Settings',
  },
  {
    id: 3,
    tablist: 'Summary',
  },
];

interface IProps {
  setIsReadyToSend: (value: boolean) => void;
  setNotificationData: (value: any) => void;
}

const NotificationTabs = ({
  setIsReadyToSend,
  setNotificationData,
}: IProps) => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [timeZones, setTimeZones] = useState<any[]>([]);
  const [applicationLists, setApplicationLists] = useState<any[]>([]);
  const [totalSubscribers, setTotalSubscribers] = useState<number>();
  const [schedule, setSchedule] = useState('now');
  const [formInputs, setFormInputs] = useState<any>();
  const [scheduledTime, setScheduledTime] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [timeToLive, setTimeToLive] = useState<number>(0);

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      setFormInputs(inputs);
      const { data } = await axiosInstance.get(
        '/application/notificationSubscriber/' + inputs.applicationId
      );
      setTotalSubscribers(data.data.totalSubscribers);
      setNotificationData({
        ...inputs,
        scheduledTime,
        isScheduled: schedule !== 'now',
        timezone: selectedTimezone,
        ttl: timeToLive,
      });
      setIsReadyToSend(true);
    },
  });

  useEffect(() => {
    setTimeZones(
      Object.keys(timezones)
        .map(value => {
          return { [value]: timezones[value] };
        })
        .map(value => {
          return {
            value: Object.keys(value)[0],
            label: Object.values(value)[0],
          };
        })
    );

    fetchApplicationLists();
  }, []);

  useEffect(() => {
    setNotificationData({
      ...formInputs,
      scheduledTime: schedule === 'now' ? new Date() : scheduledTime,
      isScheduled: Boolean(schedule === 'scheduled' && scheduledTime),
      timezone: selectedTimezone,
      ttl: timeToLive,
    });
  }, [schedule, scheduledTime, selectedTimezone, timeToLive]);

  const fetchApplicationLists = async () => {
    try {
      const { data } = await axiosInstance.get('/application');
      setApplicationLists(data.data);
    } catch (err) {
      toast({
        title: 'Something went wrong while fetching Application Segment',
        description: '',
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  function convertMinutesToSeconds(minutes: number) {
    return minutes * 60;
  }

  const onDurationChange = (minutes: any) => {
    setTimeToLive(convertMinutesToSeconds(minutes));
  };

  const getApplicationNameById = (id: string) => {
    return applicationLists.find((item: any) => item.id === id)?.name;
  };

  const noteTabs = [
    {
      name: 'compose notification',
      component: (
        <Compose
          applicationLists={applicationLists}
          handleChange={handleChange}
          inputTypes={inputTypes}
          errors={errors}
        />
      ),
    },
    {
      name: 'settings',
      component: (
        <Box mt="2rem" w="100%" pb="5rem">
          <Text fontSize="1.25rem" color={basicTextRgba[colorMode]}>
            <Icon as={GoInfo} />
            An estimated
            <Text as="span" fontWeight="semibold" mx="2">
              {totalSubscribers}
            </Text>
            of your subscribers are in this segment at this moment, you can
            choose to send them this message directly, schedule the sending or
            save it as a draft
          </Text>

          <Box mt="2rem">
            <Text mb="3" fontWeight="semibold">
              Scheduling
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              Send to eligible users
            </Text>
            <RadioGroup
              mt="1rem"
              size="lg"
              defaultChecked
              defaultValue="now"
              onChange={v => {
                setSchedule(v as any);
                setScheduledTime(null);
              }}
            >
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="now">
                  Now
                </Radio>
                <Radio colorScheme="red" value="scheduled">
                  Scheduled
                </Radio>
              </Stack>
            </RadioGroup>
            {schedule === 'scheduled' && (
              <HStack pt="1rem">
                <Box>
                  <Text fontSize="lg" fontWeight="medium">
                    Date & Time
                  </Text>
                  <Input
                    type="datetime-local"
                    size="lg"
                    borderRadius={10}
                    onChange={e => setScheduledTime(e.target.value as any)}
                  />
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="medium">
                    Recipients Timezone
                  </Text>
                  <DropdownSelect
                    options={timeZones}
                    onChange={e => setSelectedTimezone(e.target.value)}
                  />
                </Box>
              </HStack>
            )}
            <Box mt="2rem">
              <Text mb="3" fontWeight="semibold">
                Expire{' '}
              </Text>
              <Button onClick={onOpen}>
                Set Expiration <Icon as={GoCalendar} />
              </Button>
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      name: 'summary',
      component: (
        <Summary
          application={getApplicationNameById(inputTypes['applicationId'])}
          totalSubscribers={totalSubscribers}
          timeToLive={timeToLive}
          scheduled={scheduledTime}
          timezone={selectedTimezone}
        />
      ),
    },
  ];

  const handlePreviousTab = async () => {
    if (loading) return;
    if (currentTabIndex <= 0) return;

    if (!(currentTabIndex >= 1)) {
      const res = await handleSubmit();
      if (res?.msg !== 'success') return;
    }

    setCurrentTabIndex(c => c - 1);
  };

  const handleNextTab = async () => {
    if (loading) return;
    if (currentTabIndex === noteTabs.length - 1) return;
    if (!(currentTabIndex >= 1)) {
      const res = await handleSubmit();
      if (res?.msg !== 'success') return;
    }

    setCurrentTabIndex(c => c + 1);
  };

  const handleTabChange = async (id: number) => {
    if (loading) return;
    if (!(currentTabIndex >= 1)) {
      const res = await handleSubmit();
      if (res?.msg !== 'success') return;
    }

    setCurrentTabIndex(id);
  };

  return (
    <>
      <Flex gap={4} mt="2.2rem">
        <Tabs
          index={currentTabIndex}
          onChange={handleTabChange}
          flex={{ base: '100%', md: '50%' }}
          colorScheme="red"
        >
          <TabList>
            {TABS &&
              TABS.map((data, i) => (
                <Tab
                  key={`notification_tab_${data.id}`}
                  fontSize="1.2rem"
                  _focus={{ outline: 'none' }}
                >
                  {data.tablist}
                </Tab>
              ))}
          </TabList>

          <TabPanels>
            {noteTabs &&
              noteTabs.map(data => <TabPanel>{data.component}</TabPanel>)}
          </TabPanels>

          <Stack direction="row">
            <CustomButton
              fontSize="1rem"
              fontWeight="medium"
              w="5rem"
              h="2.5rem"
              borderRadius="3px"
              _focus={{ outline: 'none' }}
              onClick={handlePreviousTab}
              disabled={currentTabIndex === 0}
            >
              <Icon fontSize="1.5rem" as={BsArrowLeftShort} /> Back
            </CustomButton>
            <CustomButton
              fontSize="1rem"
              fontWeight="medium"
              w="5rem"
              h="2.5rem"
              borderRadius="3px"
              _focus={{ outline: 'none' }}
              onClick={handleNextTab}
              isLoading={loading}
              disabled={currentTabIndex === noteTabs.length - 1}
            >
              Next <Icon fontSize="1.5rem" as={BsArrowRightShort} />
            </CustomButton>
          </Stack>
        </Tabs>

        <Box
          flex="50%"
          display={{ base: 'none', md: 'flex' }}
          h="30rem"
          pt="2rem"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius="10px"
          position="relative"
        >
          <Text
            textAlign="center"
            textTransform="uppercase"
            color={basicTextRgba[colorMode]}
          >
            Mobile Preview
          </Text>
          <Stack
            zIndex={1}
            p="0.5rem"
            h="300px"
            w="205px"
            position="absolute"
            spacing="0"
          >
            <Flex mb="0">
              <Box color={LEColorConstants.black} overflow="hidden">
                <TruncatedText>
                  <Text fontSize="1rem" fontWeight="medium">
                    {inputTypes.title}
                  </Text>
                </TruncatedText>
                <TruncatedText>
                  <Text fontSize="1rem" mt="0.4rem" fontWeight="normal">
                    {inputTypes.message}
                  </Text>
                </TruncatedText>
                <TruncatedText>
                  <Text fontSize="1rem" mt="0.4rem" fontWeight="normal">
                    {inputTypes.url}
                  </Text>
                </TruncatedText>
              </Box>
              <Box
                mr="0.75rem"
                p="0.75rem"
                borderTopLeftRadius="3px"
                bgColor={
                  !inputTypes.imageUrl
                    ? quikColorConstants.influenceRedWithOpacity
                    : 'transparent'
                }
              >
                {inputTypes.imageUrl ? (
                  <Image src={inputTypes.imageUrl} maxW="5rem" />
                ) : (
                  <Icon color="white" fontSize="3rem" as={BsChatLeftText} />
                )}
              </Box>
            </Flex>
            <Box
              mt="0"
              w="full"
              h="2rem"
              p="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="start"
              fontSize="1rem"
              fontWeight="normal"
              borderRadius="3px"
              color={basicTextColor[colorMode]}
              bgColor={dashboardColor[colorMode]}
            >
              <TruncatedText>{inputTypes.buttontext}</TruncatedText>
            </Box>
          </Stack>
          <CustomImage src="/mobilepreview.png" width={250} height={430} />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Time-to-Live</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="medium" mb="1rem">
              How long the message should be kept for redelivery. The maximum
              expiration period is four weeks after the first delivery attempt.
            </Text>
            <Box p="1rem">
              <DurationInput onChange={onDurationChange} />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotificationTabs;
