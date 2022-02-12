import { Box, useColorMode } from '@chakra-ui/react';
import Authentication from 'modules/Authentication';
import { bgThemeColor } from 'utils/constants/colorConstants';
const Signup = () => {

  const { colorMode} = useColorMode()
  return (
    <Box as='section' bgColor={bgThemeColor[colorMode]}>
      <Authentication type="signup" />
    </Box>
  );
};

export default Signup;
