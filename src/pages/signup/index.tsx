import { Box, useColorMode } from '@chakra-ui/react';
import Authentication from 'modules/Authentication';
import Head from 'next/head';
import { bgThemeColor } from 'utils/constants/colorConstants';
const Signup = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Signup - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box as="section" bgColor={bgThemeColor[colorMode]}>
        <Authentication type="signup" />
      </Box>
    </>
  );
};

export default Signup;
