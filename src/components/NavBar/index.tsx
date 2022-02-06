import NextLink from 'components/NextLink';
import logo from '../../../public/icon.png';
import { Box, Flex, Image } from '@chakra-ui/react';

const NavBar = ({ links }: { links: [{ link: string; name: string }] }) => {
  return (
    <Box as="header">
      <Box as="nav" h="173px">
        <Box h="73px"></Box>
        <Flex h="100%">
          <Box>
            <Image src="/icon.png" alt="logo" width={200} />
          </Box>
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
      </Box>
    </Box>
  );
};

export default NavBar;
