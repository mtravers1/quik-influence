import NextLink from 'components/NextLink';
import { Box, Flex, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';
import useLinks from './useLinks';
import hamburger from 'assets/hamburger.png';

const MobileLinks = ({
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
  const { accordionMap, setMap, getLinkColor, showBorder } = useLinks(links);

  const accodionOpenStyles = css`
    height: fit-content;
  `;
  const accodionClosedStyles = css`
    height: 0px;
  `;

  // const [] = useState

  return (
    <Flex
      justifyContent="flex-end"
      display={{ base: 'flex', lg: 'none' }}
      width="100%"
      position="relative"
    >
      <Flex
        background="white"
        padding="10px"
        justifyContent="flex-end"
        as="label"
        htmlFor="nav-toggle"
        cursor="pointer"
      >
        <Image
          src="/hamburger.png"
          alt="logo"
          objectFit="contain"
          width="30px"
        />
      </Flex>

      <input id="nav-toggle" style={{ display: 'none' }} type="checkbox" />

      <Flex
        direction="column"
        position="absolute"
        background="white"
        padding="20px 20px 50px"
        w="350px"
        top="100%"
        className="nav-links"
      >
        {links?.length &&
          links.map((link, i) => {
            return link?.isNotClickable ? (
              <Box
                display="inline-flex"
                alignItems="flex-start"
                borderBottom={showBorder(i)}
                onClick={() => setMap(i)}
                transition="all 0.5s ease-in-out"
                padding="10px 30px 10px 0"
                overflow="hidden"
                flexDir="column"
              >
                <Box
                  key={`nav_links_${i}`}
                  fontSize="16px"
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
                    overflow="hidden"
                    direction="column"
                  >
                    {link.submenu.map((menu, j) => (
                      <NextLink
                        href={menu?.link || '/'}
                        key={`nav_links_${i}_${j}`}
                        marginRight="20px"
                        fontSize="14px"
                        style={{
                          fontWeight: '600',
                          color: getLinkColor(path, menu?.link, 2),
                        }}
                        whiteSpace="nowrap"
                        padding="10px 0"
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
                padding="10px 30px 10px 0"
                style={{
                  fontWeight: '600',
                  color: getLinkColor(path, link?.link, 1),
                  borderBottom: showBorder(i),
                }}
              >
                {link.name}
              </NextLink>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default MobileLinks;
