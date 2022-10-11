import { FC } from 'react';
import { Box } from '@chakra-ui/react';

export const ProductList: FC = ({ children }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      maxWidth="1200px"
      margin="30px auto"
      padding="0 15px"
      gridGap="30px"
    >
      {children}
    </Box>
  );
};
