import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsChatLeftText } from 'react-icons/bs';
import { FiMessageSquare, FiSend } from 'react-icons/fi';
import { HiOutlineClock, HiOutlinePencilAlt } from 'react-icons/hi';

import CustomButton from 'components/Button';
import CustomLink from 'components/NextLink';
import quikColorConstants from 'utils/constants/colorConstants';
import { axiosInstance, handleErrorResponse } from 'utils/helpers';
import TruncatedText from 'components/TruncatedText';
import CustomImage from 'components/Image';

type NotificationProps = {
  sent: IconType;
  scheduled: IconType;
  drafts: IconType;
};

const NotificationPage = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    fetchPushNotifications();
  }, []);

  const fetchPushNotifications = async () => {
    try {
      const { data } = await axiosInstance.get('/application/pushNotification');
      const groupedNotifications = groupNotificationsByStatus(data.data.rows);
      setNotifications(groupedNotifications);
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const groupNotificationsByStatus = (array: any[]) => {
    // group by isSent and isScheduled keys
    const grouped = array.reduce((acc, obj) => {
      const key = obj.isSent ? 'sent' : obj.isScheduled ? 'scheduled' : 'sent'; // hack fix; should be 'drafts'
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
    return grouped;
  };

  const notificationIcon: NotificationProps | any = {
    sent: FiSend,
    scheduled: HiOutlineClock,
    drafts: HiOutlinePencilAlt,
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="1.5rem">
          <Icon
            mr="0.85rem"
            verticalAlign="middle"
            color={quikColorConstants.influenceRed}
            as={FiMessageSquare}
          />
          Notifications for Apps
        </Box>
        <CustomButton
          h="2.75rem"
          w="12rem"
          fontSize="1rem"
          fontWeight="medium"
          borderRadius="5px"
          _focus={{ outline: 'none' }}
          onClick={() => router.push('/dashboard/notifications/create')}
        >
          Create Notification <Icon ml="0.5rem" as={AiOutlinePlus} />
        </CustomButton>
      </Flex>
      <Divider mt="2rem" />

      <Flex mt="2rem" gap={4} flexWrap="wrap">
        {Object.keys(notifications) &&
          Object.keys(notifications).map((notification: any) => (
            <Flex
              flexDirection="column"
              flexBasis="31%"
              p={2}
              gap={2}
              boxShadow="0 2px 4px #888"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text textTransform="capitalize">{notification}</Text>
                <Icon as={notificationIcon[notification]} />
              </Box>
              <Divider />
              <List>
                {notifications[notification].map((el: any) => (
                  <ListItem display="flex" alignItems="center" p={2}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      p={2}
                      h="2rem"
                      w="2rem"
                      color="white"
                      bg={quikColorConstants.influenceRed}
                      rounded="full"
                    >
                      <Icon as={BsChatLeftText} />
                    </Box>
                    <>
                      <Box ml="0.75rem">
                        <Heading as="h3" fontSize="1rem" fontWeight="semibold">
                          {el?.name}
                        </Heading>
                        <TruncatedText>
                          <Text fontSize="1rem" fontWeight="normal">
                            {el?.title}
                          </Text>
                        </TruncatedText>
                      </Box>
                    </>
                  </ListItem>
                ))}
              </List>

              <Divider mt="auto" />
              <Stack p={2} direction="row" justifyContent="space-between">
                {/* <Text>{`${notifications[notification].length} of ${notifications[notification].length} total`}</Text> */}
                {/* <CustomLink
                  href="/dashboard/notifications/"
                  _focus={{ outline: 'none' }}
                  _hover={{ color: quikColorConstants.influenceRed }}
                  transition="0.3s ease-in"
                >
                  View all
                </CustomLink> */}
              </Stack>
            </Flex>
          ))}
      </Flex>
    </>
  );
};

export default NotificationPage;
