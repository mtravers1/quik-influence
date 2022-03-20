import { Box, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ProgressBar = ({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" alignItems="center">
      <Box
        flexGrow={1}
        backgroundColor={colorMode === 'dark' ? 'white' : '#000'}
        height="1px"
        marginRight="10px"
      >
        <Box
          transition="0.3s ease"
          width={`${progress}%`}
          backgroundColor={color || '#000'}
          height="1px"
        ></Box>
      </Box>
      {progress}%
    </Flex>
  );
};

export default ProgressBar;
