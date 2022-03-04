import { useEffect } from 'react';
import { Center, Box, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import quikColorConstants from 'utils/constants/colorConstants';

const PaymentSuccessful = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      let redirectUrl;

      if (typeof window !== 'undefined') {
        redirectUrl = localStorage.getItem('redirectUrl');

        window.location.href = redirectUrl || '';
        localStorage.removeItem('redirectUrl');
      }
    }, 5000);
  }, []);

  return (
    <Center
      width="100vw"
      height="100vh"
      flexDirection="column"
      bg={colorMode === 'light' ? '#fff' : quikColorConstants.greyDark}
    >
      <Box as="h1" fontSize="46" fontWeight="600" marginBottom="20px">
        Your transaction was cancel
      </Box>
      <Box as="h3" fontSize="20" marginBottom="30px">
        you won't get Baby Dreams exclusive content
      </Box>
    </Center>
  );
};

export default PaymentSuccessful;
