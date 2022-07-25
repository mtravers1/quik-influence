import { FC } from 'react';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import fb from './assets/facebook.png';
import tw from './assets/twitter.png';
import insta from './assets/insta.png';
import email from './assets/email.png';
import phone from './assets/phone.png';
import logo from './assets/Journey_default.png';

const links = [
  { href: '#', img: fb, target: '_blank' },
  { href: '#', img: tw, target: '_blank' },
  { href: '#', img: insta, target: '_blank' },
  { href: 'mailto:info@journeyhemp.com', img: email, target: '_self' },
  { href: 'tel:(561) 453-0671', img: phone, target: '_self' },
];

export const FizzyLayout: FC = ({ children }) => {
  return (
    <Flex background="#242424" as="main" minH="100Vh" flexDirection="column">
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        padding="20px 30px"
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
      >
        <Flex marginTop={{ base: '40px', lg: 0 }}>
          {links.map((link, i) => (
            <Box
              marginRight="30px"
              as="a"
              target={link.target}
              href={link.href}
              key={`links_${i}`}
              display="inline-block"
              width={{ base: '25px', md: '30px', lg: '40px' }}
            >
              <Image
                src={link.img}
                alt="Facebook"
                objectFit="contain"
                width="100%"
                height="100%"
              />
            </Box>
          ))}
        </Flex>
        <Box>
          <Image src={logo} alt="Journey" height="130px" objectFit="contain" />
        </Box>
        <Box flexShrink={0} width="200px"></Box>
      </Flex>

      <Flex
        as="section"
        backgroundImage="linear-gradient(rgb(11, 203, 251) 0%, rgb(143, 252, 160) 100%)"
        padding="20px 40px"
        justifyContent="flex-end"
      >
        <Box
          as="p"
          fontSize={{ base: '16px', lg: '20px' }}
          fontWeight="bold"
          color="#000"
        >
          <Box as="span" color="rgb(255, 81, 81);">
            Free Shipping
          </Box>{' '}
          on orders over $50
        </Box>
      </Flex>

      <Box
        as="section"
        padding={{ base: '100px 15px', md: '100px 30px' }}
        flexGrow={1}
      >
        <Flex
          maxW="1200px"
          margin="auto"
          padding={{ base: '15px', md: '25px' }}
          backgroundColor="rgba(0,0,0,0.7)"
          width="100%"
          height="100%"
          flexDirection="column"
        >
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            borderTop="1px solid rgb(62, 62, 62)"
            borderBottom="1px solid rgb(62, 62, 62)"
            alignItems={{ base: 'flex-start', md: 'center' }}
            marginBottom="30px"
          >
            {[
              'Hello',
              'Support: (888) 992-8701',
              'Email: admin@journeyhemp.com',
            ].map((item, i) => (
              <Box
                borderRight={{
                  base: 'none',
                  lg: i === 2 ? 'none' : '1px solid rgb(62, 62, 62)',
                }}
                flexGrow={1}
                padding="20px"
                fontSize={i === 0 ? '18px' : { base: '18px', md: '24px' }}
                color="#0bcbfb"
              >
                {item}
              </Box>
            ))}
          </Flex>
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};
