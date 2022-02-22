import { useEffect, useLayoutEffect, useState } from 'react';
import { Center, Box, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';
import quikColorConstants from 'utils/constants/colorConstants';

const PaymentSuccessful = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { colorMode } = useColorMode();

  useLayoutEffect(() => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

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
      <Confetti width={dimension.width} height={dimension.height} />

      <Box as="h1" fontSize="46" fontWeight="600" marginBottom="20px">
        Your transaction was sucessful
      </Box>
      <Box as="h3" fontSize="20" marginBottom="30px">
        Thank you for your purchase
      </Box>
    </Center>
  );
};

export default PaymentSuccessful;
