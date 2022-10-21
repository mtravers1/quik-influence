import { NavBar } from 'components/MarketPlace/NavBar';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { MarketPlaceFooter } from 'components/MarketPlace/MarketPlaceFooter';

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
      className={className || 'market-place'}
    >
      <NavBar />
      <Box flexGrow={1}>{children}</Box>

      <MarketPlaceFooter />
    </Box>
  );
};
