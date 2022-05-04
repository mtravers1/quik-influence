import NextLink from 'components/NextLink';
import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useState } from 'react';

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
  const [accordionMap, setAccordionMap] = useState<any>({});

  const isActive = (path: string, link: string, index: number) => {
    return path.split('/')[index] === link?.split('/')[index];
  };

  const getLinkColor = (path: string, link: string, index: number) => {
    return isActive(path, link, index) ? 'red' : '#333';
  };

  const showBorder = (i: number) => {
    return i !== 0 || i !== links.length - 1 ? '2px solid #414141' : 'none';
  };

  const setMap = (index: number) => {
    setAccordionMap((prevMap: any) => {
      return { ...prevMap, [index]: !prevMap[index] };
    });
  };

  const accodionOpenStyles = css`
    width: 100%;
  `;
  const accodionClosedStyles = css`
    width: 0px;
  `;

  return (
    <Flex
      justifyContent="space-between"
      display={{ base: 'none', sm: 'flex' }}
      background="white"
      flexGrow={1}
      padding="10px"
    >
      <Box>
        {links?.length &&
          links.map((link, i) => {
            return link?.isNotClickable ? (
              <Box
                display="inline-flex"
                alignItems="center"
                borderRight={showBorder(i)}
                onClick={() => setMap(i)}
                transition="all 0.5s ease-in-out"
                overflow="hidden"
              >
                <Box
                  key={`nav_links_${i}`}
                  fontSize="16px"
                  padding="0px 30px"
                  fontWeight="600"
                  cursor="pointer"
                  color={getLinkColor(path, link?.link, 1)}
                >
                  {link.name}
                </Box>

                {link.submenu && (
                  <Flex
                    css={
                      accordionMap[i]
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
                          fontWeight: '600',
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
            ) : (
              <NextLink
                href={link?.link || '/'}
                key={`nav_links_${i}`}
                fontSize="16px"
                padding="0px 30px"
                style={{
                  fontWeight: '600',
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
