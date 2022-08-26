import { FC } from 'react';
import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';

export const ChartContainer: FC<{
  styles?: any;
  responsive?: boolean;
  children: any;
  asFunction?: boolean;
  label?: string;
}> = ({ children, styles = {}, responsive, asFunction, label }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      minHeight={responsive ? '' : '200px'}
      display="flex"
      flexDirection="column"
      //   background={ardThemeColor[colorMode]}
      background={
        colorMode === 'dark'
          ? 'linear-gradient(45deg, #4A5568 80%, #19212d)'
          : 'linear-gradient(45deg, #f6f8fa 80%, #c3cfe2)'
      }
      borderRadius="10px"
      padding="20px"
      {...styles}
      border={`1px solid ${colorMode === 'dark' ? '#19212d' : '#4A5568'}`}
    >
      {label && <Box>{label}</Box>}
      {asFunction ? children(colorMode) : children}
    </Box>
  );
};
