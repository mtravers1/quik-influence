import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const Payment = () => {
  const [currentPage, setCirrentPage] = useState(1);

  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }}>
      <Box>
        <Box>Billing Address</Box>
        <Box>Review & Payment</Box>
      </Box>
      <Box></Box>
    </Flex>
  );
};
