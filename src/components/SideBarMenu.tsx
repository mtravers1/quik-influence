import { Flex, Box } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import quikColorConstants, { sidebarBg } from 'utils/constants/colorConstants';
import NextLink from './NextLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';
import { SideBarMenuOptions } from 'modules';
import { SideBarOptionMenu } from 'types';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  ColorMode,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SideBarMenuProps {
  bgColor?: string;
  color?: string;
  colorMode: ColorMode;
  open: boolean;
}

const SideBarMenu = ({ bgColor, colorMode, open }: SideBarMenuProps) => {
  const route = useRouter();
  const { pathname, asPath } = route || { pathname: '/' };
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

  console.log(asPath);

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
      position={{ base: 'fixed', md: 'sticky' }}
      top="60px"
      overflow="hidden"
      flexShrink={0}
      css={maincss}
      height="95vh"
    >
      {_sideBarOptions.map(
        ({ name, icon, path, isShown, child }: SideBarOptionMenu) => {
          if (!isShown) return;

          const currentPath = path.split('/dashboard/')[1] || '/dashboard';
          const isActive = currentRoute === currentPath;

          return (
            <NavComponent
              key={name}
              isActive={isActive}
              colorMode={colorMode}
              navcss={navcss}
              path={path}
              icon={icon}
              child={child}
              asPath={asPath}
              name={name}
            />
          );
        }
      )}
    </Flex>
  );
};

const NavComponent = ({
  isActive,
  colorMode,
  navcss,
  path,
  icon,
  child,
  asPath,
  name,
}: {
  isActive: boolean;
  colorMode: ColorMode;
  navcss: any;
  path: string;
  icon: any;
  child: any;
  asPath: any;
  name: string;
}) => {
  return (
    <>
      <Box
        minW="100%"
        position="relative"
        css={navcss(isActive)}
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
        bg={isActive ? sidebarBg[colorMode] : 'transparent'}
      >
        {!child.length && (
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
            fontSize="16px"
            py={5}
            px={10}
          >
            <FontAwesomeIcon
              icon={icon as IconProp}
              style={{ marginRight: '20px' }}
            />
            {name}
          </NextLink>
        )}
      </Box>

      {!!child?.length && (
        <Accordion allowMultiple paddingLeft="35px">
          <AccordionItem>
            <AccordionButton>{name}</AccordionButton>
            <AccordionPanel pb={4}>
              {child.map((childEl: any) => (
                <NextLink
                  href={childEl.path as string}
                  color={asPath === childEl.path ? 'red' : undefined}
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
                  py={3}
                  px={10}
                  fontSize="14px"
                >
                  {childEl.name}
                </NextLink>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
};

export default SideBarMenu;
