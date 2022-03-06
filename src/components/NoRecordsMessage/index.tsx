import { Flex, Center, Text } from "@chakra-ui/react";
import React from "react";

const NoRecordsMessage = ({ message }: { message: string }) => {
  return (
    <Flex minW="100%" maxW="100%" my={10} mx={10} justify="center">
      <Center>
        <Text align="center" lineHeight={2}>
          {message}
        </Text>
      </Center>
    </Flex>
  );
};

export default NoRecordsMessage;
