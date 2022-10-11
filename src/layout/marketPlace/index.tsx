import { NavBar } from 'components/MarketPlace/NavBar';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export const MarketPlaceLayout: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      width="100%"
      background="#121212"
      className={'market-place'}
    >
      <NavBar />
      {children}
    </Box>
  );
};
