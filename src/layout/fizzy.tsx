import { FC } from 'react';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import fb from './assets/facebook.png';
import tw from './assets/twitter.png';
import insta from './assets/insta.png';
import email from './assets/email.png';
import phone from './assets/phone.png';
import logo from './assets/Journey_default.png';
import styles from './style.module.css';

const links = [
  { href: '#', img: fb, target: '_blank' },
  { href: '#', img: tw, target: '_blank' },
  { href: '#', img: insta, target: '_blank' },
  { href: 'mailto:info@journeyhemp.com', img: email, target: '_self' },
  { href: 'tel:(561) 453-0671', img: phone, target: '_self' },
];

export const FizzyLayout: FC<{ maxWidth?: string }> = ({ children }) => {
  return (
    <Flex
      background="#000"
      as="main"
      minH="100Vh"
      flexDirection="column"
      className={styles.fizzy}
    >
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

      {children}

      <Box background="#252525">
        <Box maxW="1250px" margin="auto" width="100%" padding="30px 15px 40px">
          <Box color="#15bce7" fontWeight="bold" marginBottom="30px">
            FDA DISCLAIMER: The statements made regarding these products have
            not been evaluated by the Food and Drug Administration. The efficacy
            of these products has not been confirmed by FDA-approved research.
            These products are not intended to diagnose, treat, cure or prevent
            any disease. All information presented here is not meant as a
            substitute for or alternative to information from health care
            practitioners. Please consult your health care professional about
            potential interactions or other possible complications before using
            any product. The Federal Food, Drug, and Cosmetic Act require this
            notice.
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Box>
              <Image
                src={logo}
                alt="Journey"
                height="80px"
                width="200px"
                objectFit="contain"
              />
            </Box>

            <Box color="#15bce7" fontWeight="bold">
              © Copyright 2022• Journey Hemp Co. • (888) 992-8701 •
              admin@journeyhemp.com
            </Box>

            <img
              src="https://www.journeyhemp.com/wp-content/uploads/2021/07/visa_mastercard.png"
              style={{
                height: '50px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
