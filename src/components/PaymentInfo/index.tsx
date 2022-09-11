import { FC } from 'react';
import { Box } from '@chakra-ui/react';

export const PaymentInformation: FC<{ info: any }> = ({ info }) => {
  const { accName, accNo, bankName, sortCode, instructions } = info;

  return (
    <>
      <Box>
        <Box as="strong" fontSize="15px">
          Account name:
        </Box>{' '}
        {accName || 'N/A'}
      </Box>
      <Box>
        <Box as="strong" fontSize="15px">
          Account Number:
        </Box>{' '}
        {accNo || 'N/A'}
      </Box>
      <Box>
        <Box as="strong" fontSize="15px">
          Bank name:
        </Box>{' '}
        {bankName || 'N/A'}
      </Box>
      <Box>
        <Box as="strong" fontSize="15px">
          Sort code:
        </Box>{' '}
        {sortCode || 'N/A'}
      </Box>
      <Box>
        <Box as="strong" fontSize="15px">
          Futher Instruction: {instructions ? '' : 'N/A'}
        </Box>
      </Box>
      {instructions && <Box paddingLeft="25px">{instructions || 'N/A'}</Box>}
    </>
  );
};
