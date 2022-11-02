import { Box, Flex } from '@chakra-ui/react';

export const ReviewLoader = () => {
  return (
    <>
      {[1, 2, 3].map(el => (
        <Box
          key={`loading_el_${el}`}
          marginBottom="20px"
          //   padding="20px"
          paddingBottom="20px"
          borderBottom="1px solid #E2E8F0"
          width="100%"
          marginX="auto"
          background="1e293b"
        >
          <Box className="animate-pulse" display="flex">
            <Box
              width="36px"
              height="36px"
              borderRadius="100%"
              background="#303d50"
            />
            <Box marginLeft="16px" padding="0 4px" flexGrow={1}>
              <Box
                height="16px"
                background="#303d50"
                w="75%"
                borderRadius="4px"
              />
              <Box marginTop="16px">
                <Box borderRadius="4px" height="16px" background="#303d50" />
                <Box marginTop="8px" borderRadius="4px" height="16px" w="83%" />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export const MiniCartItemLoader = () => {
  return (
    <Box marginX="auto" width="100%">
      <Flex className="animate-pulse" width="100%">
        <Box
          width="36px"
          height="36px"
          borderRadius="100%"
          background="#303d50"
        />
        <Box
          className="flex-1 space-y-4 py-1"
          marginLeft="16px"
          flexGrow={1}
          paddingY="4px"
        >
          <Box height="16px" background="#303d50" w="75%" borderRadius="4px" />
          <Box marginTop="16px">
            <Box borderRadius="4px" height="16px" background="#303d50" />
            <Box marginTop="8px" borderRadius="4px" height="16px" w="83%" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
