import { Box, Image, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { CART_CLICK_NAME } from 'utils/constants';
import { useNavLink } from '../NavBar/buttonList';
import styles from './style.module.scss';

export const MarketPlaceFooter = () => {
  const { baseLink, openMenu } = useNavLink();

  return (
    <Box
      background="#000"
      marginBottom={{
        base: '60px',
        lg: '0px',
      }}
      marginTop="70px"
    >
      <Box
        className="container"
        maxWidth="1200px"
        padding={{ base: '50px 15px', md: '100px 0' }}
      >
        <Box display="flex" flexWrap="wrap" fontWeight="450">
          <Box
            width={{ base: '100%', lg: '33.33%' }}
            marginBottom={{ base: '20px', lg: 'unset' }}
          >
            <Box className={styles['market-place-footer__title']}>About Us</Box>
            <Box maxWidth={{ base: 'unset', lg: '290px' }}>
              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
              tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </Box>

            <Box></Box>
          </Box>
          <Box
            width={{ base: '100%', md: '50%', lg: '25%' }}
            marginBottom={{ base: '20px', lg: 'unset' }}
          >
            <Box className={styles['market-place-footer__title']}>
              Information
            </Box>
            <Box
              as="ul"
              className={styles['market-place-footer__link_container']}
            >
              <Link href={baseLink}>
                <a>
                  <Box as="li">Home</Box>
                </a>
              </Link>
              <Link href={`${baseLink}/shop`}>
                <a>
                  <Box as="li">Shop</Box>
                </a>
              </Link>
              <Link href="/privacy">
                <a>
                  <Box as="li">Privacy & Policy</Box>
                </a>
              </Link>
              <Link href="/terms-conditions">
                <a>
                  <Box as="li">Terms & Conditions</Box>
                </a>
              </Link>
            </Box>
          </Box>
          <Box
            width={{ base: '100%', md: '50%', lg: '16.66%' }}
            marginBottom={{ base: '20px', lg: 'unset' }}
          >
            <Box className={styles['market-place-footer__title']}>Account</Box>
            <Box
              as="ul"
              className={styles['market-place-footer__link_container']}
            >
              <Link href={`${baseLink}/login`}>
                <a>
                  <Box as="li">Login</Box>
                </a>
              </Link>

              <Box as="li" onClick={() => openMenu(CART_CLICK_NAME)}>
                My Cart
              </Box>
              <Box as="li">Wishlist</Box>

              <Link href={`${baseLink}/dashboard`}>
                <a>
                  <Box as="li">My Account</Box>
                </a>
              </Link>
            </Box>
          </Box>
          <Box
            width={{ base: '100%', md: '50%', lg: '25%' }}
            marginBottom={{ base: '20px', lg: 'unset' }}
          >
            <Box className={styles['market-place-footer__title']}>
              Newsletter
            </Box>

            <Box
              className={styles['market-place-footer__market-place__section']}
            >
              <Box as="input" placeholder="Get informed of new products" />

              <Box as="button">Subscribe</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box background="#2d2d2d">
        <Flex
          alignItems="center"
          fontWeight="500"
          width="100%"
          paddingTop="10px"
          paddingBottom="10px"
          className="container"
          maxWidth="1200px"
        >
          {'© ' + new Date().getFullYear()}. Powered by{' '}
          <Image src="/logo-white.png" width="80px" marginLeft="10px" />
        </Flex>
      </Box>
    </Box>
  );
};
