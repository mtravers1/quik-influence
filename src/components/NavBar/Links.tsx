import NextLink from 'components/NextLink';
import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import useLinks from './useLinks';

import styles from './links.module.css'

import styles from './link.module.css'

import Link from 'next/link'
const DeskTopLinks = ({
  links,
  path,
}: {
  links: [
    {
      link: string;
      name: string;
      isNotClickable?: boolean;
      submenu: [{ link: string; name: string }];
    }
  ];
  path: string;
}) => {
  const { accordionMap, setMap, getLinkColor, showBorder, isActive } =
    useLinks(links);

  const accodionOpenStyles = css`
    width: 100%;
  `;
  const accodionClosedStyles = css`
    width: 0px;
  `;

  return (
    <Flex
      justifyContent="space-between"
      display={{ base: 'none', lg: 'flex' }}
      background="white"
      flexGrow={1}
      padding="10px"
    >
      <Box>
        {links?.length &&
          links.map((link, i) => {
            return link?.isNotClickable ? (
              

              <>
              <a className={styles.shop} href='https://shop.quikinfluence.com/'> Shop</a>

              <Box
                display="inline-flex"
                alignItems="center"
                borderRight={showBorder(i)}
                onClick={() => setMap(i)}
                transition="all 0.5s ease-in-out"
                overflow="hidden"
                key={`nav_links_${i}`}
              >
                <div>
                <a className={styles.shop} href='https://shop.quikinfluence.com/'>Shop  </a>
                </div>


                <Box
                  fontSize="16px"
                  padding="0px 30px 0px 30px"
                  fontWeight="600"
                  cursor="pointer"
                  color={getLinkColor(path, link?.link, 1)}
                >
 
                  {link.name}
                </Box>

                {link.submenu && (
                  <Flex
                    css={
                      accordionMap[i] || isActive(path, link?.link, 1)
                        ? accodionOpenStyles
                        : accodionClosedStyles
                    }
                    flexWrap="nowrap"
                    flexShrink={0}
                  >
                    {link.submenu.map((menu, j) => (
                      <NextLink
                        href={menu?.link || '/'}
                        key={`nav_links_${i}_${j}`}
                        marginRight="20px"
                        fontSize="14px"
                        padding="0px 15px"
                        style={{
                          fontWeight: 600,
                          color: getLinkColor(path, menu?.link, 2),
                        }}
                        whiteSpace="nowrap"
                      >
                        {menu.name}
                      </NextLink>
                    ))}
                  </Flex>
                )}
                
              </Box>
              </>
            ) : (
              <NextLink
                href={link?.link || '/'}
                key={`nav_links_${i}`}
                fontSize="16px"
                padding="0px 15px"
                style={{
                  fontWeight: 600,
                  color: getLinkColor(path, link?.link, 1),
                  borderRight: showBorder(i),
                }}
              >
                {link.name}
              </NextLink>
            );
          })}
      </Box>
    </Flex>
  );
};

export default DeskTopLinks;
