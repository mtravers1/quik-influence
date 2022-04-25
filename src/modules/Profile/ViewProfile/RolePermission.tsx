import { Flex, Heading, useColorMode } from '@chakra-ui/react';

import { cardThemeColor } from 'utils/constants/colorConstants';
type Props = {};

const RolePermission = (props: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      bgColor={cardThemeColor[colorMode]}
      w="100%"
      flexDirection="column"
      p="12"
    >
      <Heading size="md">Role & Permission</Heading>
      <Flex w="100%" flexGrow={1}></Flex>
    </Flex>
  );
};

export default RolePermission;
