import React from 'react';
import { Heading, Text } from '@chakra-ui/layout';
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { grayWhiteColor } from 'utils/constants/colorConstants';

type CampaignReportHeaderType = {
  title: string;
  date: string;
};

const CampaignReportHeader: React.FC<CampaignReportHeaderType> = ({
  title,
  date,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex justify="space-between" mb={5}>
      <Flex
        w="75%"
        maxW="fit-content"
        justify="space-between"
        flexDir="column"
        alignItems="flex-start"
      >
        <Heading size="md">{title}</Heading>
        <Text fontSize="md" mt="2" color={grayWhiteColor[colorMode]}>
          {date}
        </Text>
      </Flex>
      <Flex alignSelf="flex-start">
        <Menu>
          <MenuButton>
            <IconButton
              aria-label="menu options"
              variant="ghost"
              icon={
                <FontAwesomeIcon
                  color={grayWhiteColor[colorMode]}
                  icon={faEllipsisH as IconProp}
                />
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Delete Widget</MenuItem>
            <MenuItem>Export as Email</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default CampaignReportHeader;
