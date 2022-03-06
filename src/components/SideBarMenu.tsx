import { Flex, Box } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import quikColorConstants, { sidebarBg } from 'utils/constants/colorConstants';
import NextLink from './NextLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';
import { SideBarMenuOptions } from 'modules';
import { SideBarOptionMenu } from 'types';
import { useRouter } from 'next/router';
import { ColorMode } from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SideBarMenuProps {
  bgColor?: string;
  color?: string;
  colorMode: ColorMode;
  open: boolean;
}

const SideBarMenu = ({ bgColor, colorMode, open }: SideBarMenuProps) => {
  const route = useRouter();
  const { pathname } = route || { pathname: '/' };
  const _sideBarOptions = Object.values(SideBarMenuOptions);

  const navcss = (isActive: boolean) => css`
    & {
      &:hover {
        &::before {
          background: ${quikColorConstants.influenceRed};
          height: 80%;
        }
      }

      &::before {
        background: ${isActive
          ? quikColorConstants.influenceRed
          : sidebarBg[colorMode]};
        height: ${isActive ? '80%;' : '0'};
      }
    }
  `;

  const maincss = css`
    & {
      left: ${open ? '0' : '-300px'};
      transition: 0.3s ease;
    }
  `;

  let currentRoute: string;
  const paths = pathname.split('/');

  if (paths.length === 2) {
    currentRoute = '/dashboard';
  } else currentRoute = paths[2];

  return (
    <Flex
      flexDirection="column"
      width="250px"
      py={10}
      bgColor={bgColor}
      // position={['fixed', 'sticky']}
      // position="fixed"
      position={{ base: 'fixed', md: 'sticky' }}
      // top={{ base: '70px', md: 0 }}
      top="60px"
      overflow="hidden"
      flexShrink={0}
      css={maincss}
      height="95vh"
    >
      {_sideBarOptions.map(
        ({ name, icon, path, isShown }: SideBarOptionMenu) => {
          if (!isShown) return;

          const currentPath = path.split('/dashboard/')[1] || '/dashboard';

          return (
            <Box
              key={name}
              minW="100%"
              position="relative"
              css={navcss(currentRoute === currentPath)}
              _before={{
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                height: 0,
                width: '5px',
                background: quikColorConstants.influenceRed,
                borderRadius: '0 10px 10px 0',
                transition: '0.3s ease',
              }}
              bg={
                currentRoute === currentPath
                  ? sidebarBg[colorMode]
                  : 'transparent'
              }
            >
              <NextLink
                href={path as string}
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
                py={5}
                px={10}
              >
                <FontAwesomeIcon
                  icon={icon as IconProp}
                  style={{ marginRight: '20px' }}
                />
                {name}
              </NextLink>
            </Box>
          );
        }
      )}
    </Flex>
  );
};

export default SideBarMenu;
