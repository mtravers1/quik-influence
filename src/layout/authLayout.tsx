import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import landingImage from '../../public/homepage.jpg';

export const AuthLayout: React.FC<{}> = ({ children }) => {
  return (
    <Box as="section" background={'#19212d'}>
      <Flex height="100vh">
        <Box
          width="55%"
          position="relative"
          display={['none', 'block']}
          as="div"
        >
          <Image
            src={landingImage}
            alt="staff at the office"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box width={['100%', '45%']}>
          <Flex
            width="full"
            height="full"
            justifyContent="center"
            alignItems={['unset', 'center']}
            p={6}
            pt={['10rem', '0']}
          >
            <Box maxW="440px">{children}</Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
