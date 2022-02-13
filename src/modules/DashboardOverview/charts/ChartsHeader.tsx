
import React from 'react';
import {   Divider, Heading, Text } from "@chakra-ui/layout";
import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, 
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"; 
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ChartsHeaderType = {
    title: string
}

const ChartsHeader: React.FC<ChartsHeaderType> = ({ title }) => { 

    return (
        <Flex justify="space-between" mb={5}>
            <Flex
                w="75%"
                maxW="fit-content"
                justify="space-between"
                alignItems="center"
            >
                <Heading size="md">{title}</Heading>
                <Divider mx={4} h="60%" orientation="vertical" />
                <Text fontSize="md">March 2020</Text>
            </Flex>
            <Menu>
                <MenuButton  >
                    <IconButton
                        aria-label="menu options"
                        variant="ghost"
                        icon={<FontAwesomeIcon icon={faEllipsisH as IconProp} />}
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem>Delete Widget</MenuItem>
                    <MenuItem>Export as Email</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default ChartsHeader;