import React from 'react';
import { Flex, Box, Heading, useColorMode } from '@chakra-ui/react';
import {
  faEnvelope,
  faUserTag,
  faAddressCard,
  faAddressBook,
  faPhone,
  faCalendar,
  faGlobeAmericas,
  faCity,
  faMailBulk,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import BasicInfoWrap from './BasicInfoWrap';
import { authSelectors } from 'redux/selectors';
import { cardThemeColor } from 'utils/constants/colorConstants';
import { axiosInstance } from 'utils/helpers';
import { useSelector } from 'react-redux';

type Props = {};

const BasicInfo = () => {
  const { admin } = useSelector(authSelectors.getUser);
  const basicInfoConstant = [
    {
      icon: faUserTag,
      name: 'Gender',
      title: admin?.gender,
    },
    {
      icon: faEnvelope,
      name: 'Email',
      title: admin?.email,
    },
    { icon: faAddressCard, name: 'Address 1', title: admin?.address1 },
    {
      icon: faAddressBook,
      name: 'Address 2',
      title: admin?.address2,
    },
    { icon: faPhone, name: 'Cell phone', title: admin?.phone },
    {
      icon: faCalendar,
      name: 'DOB',
      title: admin?.dateOfBirth,
    },
    { icon: faGlobeAmericas, name: 'Country', title: admin?.country },
    { icon: faCity, name: 'City', title: admin?.city },
    {
      icon: faMailBulk,
      name: 'Zip-Code',
      title: admin?.zipCode,
    },
    {
      icon: faLocationArrow,
      name: 'State',
      title: admin?.state,
    },
  ];

  const { colorMode } = useColorMode();
  return (
    <Flex
      bgColor={cardThemeColor[colorMode]}
      w="100%"
      flexDirection="column"
      p="12"
    >
      <Heading size="md">Basic Info</Heading>
      <Flex
        w="100%"
        flexGrow={1}
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      >
        <Box flexGrow="inherit">
          {basicInfoConstant.slice(0, 5).map(({ name, icon, title }: any) => (
            <BasicInfoWrap
              key={name}
              icon={icon as IconProp}
              name={name}
              title={title}
            />
          ))}
        </Box>
        <Box flexGrow="inherit">
          {basicInfoConstant.slice(5).map(({ name, icon, title }: any) => (
            <BasicInfoWrap
              key={name}
              icon={icon as IconProp}
              name={name}
              title={title}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await axiosInstance.get('/auth/profile/admin');

  // Pass data to the page via props
  return { props: { data: response.data.data } };
}
export default BasicInfo;
