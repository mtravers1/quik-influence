import React from 'react';
import { Flex, Box, Text, useColorMode } from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  title: string | null;
  name: string;
  icon: IconProp;
};

const BasicInfoWrap = ({ title, name, icon }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDirection="row" my="12">
      <FontAwesomeIcon
        color={colorMode !== 'dark' ? 'red' : 'inherit'}
        icon={icon}
      />
      <Box pl="12px">
        <Text fontFamily="Avenir" fontWeight="bold" fontSize="2xl">
          {' '}
          {title ? title : 'N/A'}
        </Text>
        <Text fontFamily="Avenir" fontSize="md">
          {name}
        </Text>{' '}
      </Box>
    </Flex>
  );
};

export default BasicInfoWrap;
