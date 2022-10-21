import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const PageTitle: FC<{ title: string; marginBottom?: string }> = ({
  title,
  marginBottom = '20px',
}) => {
  return (
    <Box
      textAlign="center"
      fontSize={{ base: '20px', md: '30px' }}
      fontWeight="500"
      marginBottom={marginBottom}
    >
      {title}
    </Box>
  );
};
