import NextLink from 'components/NextLink';
import { useRouter } from 'next/router';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import NavWrapper from './NavWrapper';
import DeskTopLinks from './Links';
import MobileLinks from './MobileLinks';

const NavBar = ({
  links,
}: {
  links: [
    {
      link: string;
      name: string;
      isNotClickable?: boolean;
      submenu: [{ link: string; name: string }];
    }
  ];
}) => {
  const router = useRouter();

  return (
    <Box as="header" position="absolute" zIndex={2} w="100%">
      <Box as="nav" h="173px">
        <Flex
          h={{ base: 'auto', md: '73px' }}
          background="#fff"
          alignItems="center"
          padding={{ base: '5px 15px', md: '0 15px' }}
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box
            marginRight="5"
            height="auto"
            width="fit-content"
            fontSize="14px"
            textAlign="center"
            color="#333"
          >
            Get help for this site or any of our apps with - QUIK ASSISTANT
          </Box>
          <Flex marginTop={{ base: '5px', md: '0' }} alignItems="center">
            <NextLink href={'/video-help'} marginRight={{ base: 2, md: 6 }}>
              <Button
                color="white"
                background="#000"
                borderRadius="40px"
                _hover={{ bg: '#000' }}
                fontSize={{ base: '10px', md: '14ps' }}
                p={{ base: '10px 20px', md: '15px 30px' }}
                height="auto"
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
                fontSize={{ base: '10px', md: '14ps' }}
                p={{ base: '10px 20px', md: '15px 30px' }}
                height="auto"
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
              >
                <Image
                  src="/logo-white.png"
                  alt="logo"
                  marginRight="100px"
                  height="90%"
                  objectFit="contain"
                  objectPosition="left"
                />

                <DeskTopLinks links={links} path={router.asPath} />
                <MobileLinks
                  links={links}
                  path={router.asPath}
                  top={styles.top}
                />
              </Flex>
            </Box>
          )}
        </NavWrapper>
      </Box>
    </Box>
  );
};

export default NavBar;
