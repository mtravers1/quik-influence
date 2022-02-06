import { Flex, Box } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import quikColorConstants, { sidebarBg } from 'utils/constants/colorConstants';
import NextLink from './NextLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideBarMenuOptions } from 'modules';
import { SideBarOptionMenu } from 'types';
import { useRouter } from 'next/router';
import { ColorMode } from '@chakra-ui/react';

interface SideBarMenuProps {
  bgColor?: string;
  color?: string;
  colorMode: ColorMode;
}

const SideBarMenu = ({ bgColor, color, colorMode }: SideBarMenuProps) => {
  const [activeMenu, setActiveMenu] = useState('');
  const route = useRouter();
  const { pathname } = route || { pathname: '/' };
  const _sideBarOptions = Object.values(SideBarMenuOptions);

  useEffect(() => {
    if (!activeMenu) {
      setActiveMenu(_sideBarOptions[0].path);
    }
  }, [_sideBarOptions, activeMenu]);

  return (
    <Flex flexDirection="column" width="250px" py={10} bgColor={bgColor}>
      {_sideBarOptions.map(
        ({ name, icon, path, isShown }: SideBarOptionMenu) => {
          if (!isShown) return;

          return (
            <Box
              key={name}
              py={5}
              px={10}
              minW="100%"
              _hover={{
                backgroundColor: sidebarBg[colorMode],
              }}
              bg={
                (activeMenu || pathname) === path
                  ? sidebarBg[colorMode]
                  : 'transparent'
              }
              borderLeft={`3px solid ${
                (activeMenu || pathname) === path
                  ? quikColorConstants.influenceRed
                  : sidebarBg[colorMode]
              }`}
              onClick={() => setActiveMenu(path)}
            >
              <NextLink
                href={path}
                display="block"
                _hover={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                _focus={{
                  border: 'none',
                  textDecoration: 'none',
                }}
                fontFamily="Avenir"
                fontWeight="bold"
              >
                <FontAwesomeIcon icon={icon} /> {name}
              </NextLink>
            </Box>
          );
        }
      )}
    </Flex>
  );
};

export default SideBarMenu;
