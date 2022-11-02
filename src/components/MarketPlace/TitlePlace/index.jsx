import { Box } from '@chakra-ui/react';

export const TitlePlace = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      background="#000"
      marginBottom={{ base: '60px', md: '80px', lg: '100px' }}
    >
      <Box
        fontSize={{ base: '20px', md: '28px', lg: '32px' }}
        padding="80px 15px"
        fontWeight="bold"
      >
        {children}
      </Box>
    </Box>
  );
};
