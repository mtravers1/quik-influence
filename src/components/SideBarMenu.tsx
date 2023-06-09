import { Flex, Box } from '@chakra-ui/layout';
import React, { memo, useState } from 'react';
import quikColorConstants, { sidebarBg } from 'utils/constants/colorConstants';
import NextLink from './NextLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';
import { useSideBarMenuOptions } from 'modules';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  ColorMode,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import TruncatedText from './TruncatedText';
import { useSelector } from 'react-redux';
import { hasPermission } from 'utils/helpers';

interface SideBarMenuProps {
  bgColor?: string;
  color?: string;
  colorMode: ColorMode;
  open: boolean;
}

const SideBarMenu = ({ bgColor, colorMode, open }: SideBarMenuProps) => {
  const route = useRouter();
  const { pathname, asPath } = route || { pathname: '/' };
  const SideBarMenuOptions = useSideBarMenuOptions();
  const _sideBarOptions = Object.values(SideBarMenuOptions);
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const permissions = useSelector((state: any) => state.auth.permissions);

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
      position={{ base: 'fixed', md: 'sticky' }}
      top="60px"
      overflow="hidden"
      flexShrink={0}
      css={maincss}
      height="95vh"
    >
      <Accordion
        allowMultiple
        defaultIndex={activeIndex ? [activeIndex] : undefined}
      >
        {_sideBarOptions.map(
          ({ name, icon, path, isShown, child, permission }, i) => {
            if (!isShown) return;

            const currentPath = path.split('/dashboard/')[1] || '/dashboard';
            const isActive = currentRoute === currentPath;
            if (isActive && child?.length && activeIndex !== i)
              setActiveIndex(i);

            if (!hasPermission(permission, permissions)) return;
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
                permissions={permissions}
              />
            );
          }
        )}
      </Accordion>
    </Flex>
  );
};

const styles = {
  display: 'block',
  _hover: {
    textDecoration: 'none',
    color: 'inherit',
  },
  _focus: {
    border: 'none',
    textDecoration: 'none',
  },
  fontFamily: 'Avenir',
  fontWeight: 'bold',
  fontSize: '16px',
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
  permissions,
}: {
  isActive: boolean;
  colorMode: ColorMode;
  navcss: any;
  path: string;
  icon: any;
  child: any;
  asPath: any;
  name: string;
  permissions?: string[];
}) => {
  return (
    <>
      <Box minW="100%">
        <AccordionItem border="none">
          <Box
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
            {child.length ? (
              <AccordionButton fontSize="16px" py={2} px={10}>
                {path ? (
                  <NextLink
                    href={path as string}
                    {...styles}
                    width="100%"
                    textAlign="left"
                    py={3}
                  >
                    <FontAwesomeIcon
                      icon={icon as IconProp}
                      style={{ marginRight: '20px' }}
                    />
                    {name}
                  </NextLink>
                ) : (
                  <Box {...styles}>
                    <FontAwesomeIcon
                      icon={icon as IconProp}
                      style={{ marginRight: '20px' }}
                    />
                    {name}
                  </Box>
                )}
                {/* 
                <FontAwesomeIcon
                  icon={faAngleDown as IconProp}
                  style={{ marginLeft: '20px', padding: '10px 10px' }}
                /> */}
              </AccordionButton>
            ) : (
              <Box py={2} px={10}>
                <NextLink
                  href={path as string}
                  {...styles}
                  width="100%"
                  textAlign="left"
                  py={3}
                >
                  <FontAwesomeIcon
                    icon={icon as IconProp}
                    style={{ marginRight: '20px' }}
                  />
                  {name}
                </NextLink>
              </Box>
            )}
          </Box>

          <AccordionPanel paddingLeft="35px">
            {child.map((childEl: any) => {
              if (!hasPermission(childEl.permission, permissions)) return;
              return (
                <NextLink
                  key={childEl.name}
                  href={childEl.path as string}
                  color={asPath === childEl.path ? 'red' : undefined}
                  {...styles}
                  _hover={{
                    textDecoration: 'none',
                    color: asPath === childEl.path ? 'red' : 'inherit',
                  }}
                  py={3}
                  px={10}
                  fontSize="14px"
                >
                  <TruncatedText>{childEl.name}</TruncatedText>
                </NextLink>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Box>
    </>
  );
};

export default SideBarMenu;
