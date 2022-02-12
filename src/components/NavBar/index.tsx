import NextLink from 'components/NextLink';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import NavWrapper from './NavWrapper';

const NavBar = ({ links }: { links: [{ link: string; name: string }] }) => {
  return (
    <Box as="header" position="absolute" zIndex={2} w="100%">
      <Box as="nav" h="173px">
        <Flex
          h="73px"
          background="#fff"
          alignItems={{ base: 'center', md: 'flex-end' }}
          p="6"
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box marginRight="5">
            Get help for this site or any of our apps with -
          </Box>
          <Flex marginTop={{ base: '5px', md: '0' }}>
            <Box marginRight="15">QUIK ASSISTANT</Box>
            <NextLink href={'/video-help'} marginRight="6">
              <Button
                color="white"
                background="#000"
                borderRadius="40px"
                _hover={{ bg: '#000' }}
              >
                Get Video Help
              </Button>
            </NextLink>
            <NextLink href={'/text-help'}>
              <Button
                color="white"
                background="#000"
                borderRadius="40px"
                _hover={{ bg: '#000' }}
              >
                Get Text Help
              </Button>
            </NextLink>
          </Flex>
        </Flex>

        <NavWrapper>
          {(styles: any) => (
            <Box {...styles} w="100%">
              <Flex
                alignItems="center"
                maxW="1440px"
                margin="auto"
                h={{ base: '73px', md: '100px' }}
                padding="0 15px"
              >
                <Image
                  src="/logo-white.png"
                  alt="logo"
                  marginRight="100px"
                  height="90%"
                  objectFit="contain"
                  objectPosition="left"
                />

                <Flex
                  justifyContent="space-between"
                  flexGrow={1}
                  display={{ base: 'none', sm: 'flex' }}
                >
                  <Box>
                    {links.map((link, i) => (
                      <NextLink
                        href={link.link}
                        key={`nav_links_${i}`}
                        style={{
                          color: 'red',
                        }}
                      >
                        {link.name}
                      </NextLink>
                    ))}
                  </Box>
                </Flex>
              </Flex>
            </Box>
          )}
        </NavWrapper>
      </Box>
    </Box>
  );
};

export default NavBar;
