import { Box, useColorMode } from '@chakra-ui/react';
import Authentication from 'modules/Authentication';
import Head from 'next/head';
import { bgThemeColor } from 'utils/constants/colorConstants';
import { getUser } from 'utils/helpers';

const Login = () => {
  const { colorMode } = useColorMode();
  const user = getUser();

  if (user.admin) window.location.href = '/dashboard';

  return (
    <>
      <Head>
        <title>Login - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box as="section" bgColor={bgThemeColor[colorMode]}>
        <Authentication type="login" />
      </Box>
    </>
  );
};

export default Login;
