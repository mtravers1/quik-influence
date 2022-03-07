import { Box, Heading, Image, useColorMode, Avatar } from '@chakra-ui/react';
import { sidebarBg } from 'utils/constants/colorConstants';
import { useRouter } from 'next/router';

import { authSelectors } from 'redux/selectors';
import { cardThemeColor } from 'utils/constants/colorConstants';
import { useSelector } from 'react-redux';
import UploadImage from 'modules/Campaigns/CreateCampaign/UploadImage';

const UserImage = ({ name, handleChange, label, avatar }: any) => {
  const { colorMode } = useColorMode();
  const route = useRouter();
  const { admin } = useSelector(authSelectors.getUser);
  const { pathname } = route || { pathname: '/' };

  return (
    <Box
      d="flex"
      bgColor={cardThemeColor[colorMode]}
      borderTopStartRadius="3xl"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        w="100%"
        h={250}
        p="12"
        bg={sidebarBg['dark']}
        borderTopStartRadius="3xl"
        overflow="hidden"
        bgGradient={`linear(to-r, black,${
          colorMode !== 'dark' ? 'red' : cardThemeColor[colorMode]
        })`}
      ></Box>
      <Box borderWidth="4px" bg="white" mt="-100px" borderRadius="full">
        <Avatar
          borderRadius="full"
          fontSize="7rem"
          bg={`${cardThemeColor[colorMode]}`}
          name={admin?.firstName + ' ' + admin?.lastName}
          boxSize={{ base: '100', md: '150px', lg: '200px' }}
          src={avatar}
        />
      </Box>
      {pathname === '/profile/edit' && (
        <Box mt="5">
          <UploadImage
            name={name}
            previewImage={false}
            handleChange={handleChange}
            label={label}
          />
        </Box>
      )}
      <Heading size="lg" my="10">
        {admin?.firstName + ' ' + admin?.lastName}
      </Heading>
    </Box>
  );
};

export default UserImage;
