import { Box, useColorMode } from '@chakra-ui/react';
import Authentication from 'modules/Authentication';
import { bgThemeColor } from 'utils/constants/colorConstants';
const Login = () => {

  const { colorMode} = useColorMode()
  return (
    <Box as='section' bgColor={bgThemeColor[colorMode]}>
      <Authentication type="login" />
    </Box>
  );
};

export default Login;
