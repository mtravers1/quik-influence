import NextLink from 'components/NextLink';
import logo from '../../../public/icon.png';
import { Box, Flex, Image, Button } from '@chakra-ui/react';

const NavBar = ({ links }: { links: [{ link: string; name: string }] }) => {
  return (
    <Box as="header" position="fixed" zIndex={2} w="100%">
      <Box as="nav" h="173px">
        <Flex
          h="73px"
          background="#fff"
          alignItems="flex-end"
          p="6"
          justifyContent="center"
        >
          <Box marginRight="5">
            Get help for this site or any of our apps with -
          </Box>
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

        <Box background="linear-gradient(#000, transparent)">
          <Flex alignItems="center" h="100px" maxW="1440px" margin="auto">
            <Image
              src="/logo-white.png"
              alt="logo"
              marginRight="100px"
              height="90%"
              objectFit="contain"
              objectPosition="left"
            />

            <Flex justifyContent="space-between" flexGrow={1}>
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
      </Box>
    </Box>
  );
};

export default NavBar;
