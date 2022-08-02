import {
  Box,
  Heading,
  useColorMode,
  Avatar,
  Flex,
  Text,
} from '@chakra-ui/react';
import quikColorConstants, {
  grayBlackColor,
  sidebarBg,
} from 'utils/constants/colorConstants';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';

import { authSelectors } from 'redux/selectors';
import { cardThemeColor } from 'utils/constants/colorConstants';
import { useSelector } from 'react-redux';
import UploadImage from 'modules/Campaigns/CreateCampaign/UploadImage';
import CustomButton from 'components/Button';

const UserImage = ({ name, handleChange, label, avatar }: any) => {
  const { colorMode } = useColorMode();
  const route = useRouter();
  const { admin } = useSelector(authSelectors.getUser);
  const { pathname } = route || { pathname: '/' };

  const onQRCodeDownload = () => {
    const svg = document.getElementById('QRCode');
    const svgData = new XMLSerializer().serializeToString(svg as any);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `${admin?.firstName} ${admin?.lastName} - QuikInfluence Profile QRCode`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const getStructuredDataForQrCode = (admin: any) => {
    if (!admin) return '';

    return `
    QuikInfluence Verified.
  Name: ${admin.firstName || ''} ${admin.lastName || ''}
  Email: ${admin.email || ''}
  Phone: ${admin.phone || ''}
  DOB: ${admin.dateOfBirth || ''}
  Address: ${admin.address1 || ''} ${admin.address2 || ''}
  City: ${admin.city || ''}
  State: ${admin.state || ''}
  Zip: ${admin.zipCode || ''}
  State: ${admin.state || ''}
   `;
  };

  function QrCodeLinkComponent() {
    return (
      <>
        <Flex
          maxW="130px"
          minW="130px"
          h="137px"
          boxShadow="md"
          borderLeft={`8px solid  ${
            colorMode !== 'dark'
              ? quikColorConstants.influenceRed
              : grayBlackColor[colorMode]
          }`}
          borderRadius="lg"
          flexDir="column-reverse"
          justifyContent="space-evenly"
          pl={['5px', '10px']}
          marginBottom="20px"
        >
          <Text fontSize="0.75rem" fontWeight="normal" maxW="7.813rem">
            Share QR code after saving
          </Text>
          <Box
            as="div"
            position="relative"
            className="qrcode"
            style={{
              height: 'auto',
              maxWidth: 90,
              width: '100%',
            }}
          >
            {/* @ts-ignore */}
            <QRCode
              id="QRCode"
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              title="Custom Title"
              value={getStructuredDataForQrCode(admin)}
              // @ts-ignore
              viewBox={`0 0 256 256`}
            />
            <Box
              className="qrsave-container"
              alignItems="center"
              justifyContent="center"
            >
              <CustomButton
                fontSize="10px"
                borderRadius="5px"
                height="1rem"
                width="2.5rem"
                color="white"
                className="btn"
                _focus={{
                  boxShadow: 'none',
                }}
                onClick={onQRCodeDownload}
              >
                Save
              </CustomButton>
            </Box>
          </Box>
        </Flex>
      </>
    );
  }

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
      <QrCodeLinkComponent />
    </Box>
  );
};

export default UserImage;
