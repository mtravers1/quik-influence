import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { CartDataType } from 'modules/MarketPlace/interfaces';
import { MarketShippingAddress } from 'components/MarketPlace/ShippingAddress';
import { CartSummaryCard } from 'components/MarketPlace/CartSummary';
import style from './style.module.scss';
import { ProductPrice } from 'components/MarketPlace/ProductCard/productPrice';
import classNames from 'classnames';
import { MarketShipping } from 'components/MarketPlace/shipping';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';
import { axiosInstance } from 'utils/helpers';

export const MarketPlaceCheckout = () => {
  const {
    cart,
    auth: { user },
  }: { cart: CartDataType; auth: any } = useSelector((state: any) => state);
  const [collapseAside, setCollapseAside] = useState(false);
  const { query, push } = useRouter();
  const { previous_step, step } = query;
  const [rates, setRates] = useState<any>();
  const { baseLink } = useNavLink();

  const toggleCollapseAside = () => setCollapseAside(!collapseAside);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        setCollapseAside(true);
      } else {
        setCollapseAside(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!user?.id) {
    push(`${baseLink}/login?redirect=${baseLink}/checkout`);
  }

  const addShippingRates = async () => {
    const rates = await axiosInstance.post('/users/campaign/shipping/rates', {
      cartId: cart?.id,
    });

    setRates(rates.data.data);
  };

  useEffect(() => {
    addShippingRates();
  }, [cart]);

  console.log(rates);

  return (
    <Box
      background={{
        base: '#121212',
        lg: 'linear-gradient(to right, #121212 65%, #2d2d2d 35%)',
      }}
      minHeight="100vh"
      className={style['checkout-container']}
      overflowX="hidden"
    >
      <Box maxW={{ base: '532px', lg: '1200px' }} width="100%" margin="auto">
        <Box
          width="120px"
          padding="1em 0"
          display={{ base: 'block', lg: 'none' }}
        >
          <Image
            src="/logo-white.png"
            alt="logo"
            objectFit="contain"
            objectPosition="left"
          />
        </Box>
      </Box>

      <Box
        as="article"
        background="#2d2d2d"
        borderBottom="1px solid"
        display={{ base: 'block', lg: 'none' }}
      >
        <Flex
          maxW={{ base: '532px', lg: '1200px' }}
          width="100%"
          margin="auto"
          padding="1em 15px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box fontWeight={450} fontSize="14px" cursor="pointer">
            <Box
              as="span"
              display="inline-block"
              marginRight="10px"
              onClick={toggleCollapseAside}
            >
              {collapseAside ? 'Show Order Summary' : 'Hide Order Summary'}
            </Box>
            <FontAwesomeIcon icon={faArrowDown} size="xs" />
          </Box>

          <ProductPrice amount={cart?.total} fontSize="20px" />
        </Flex>
      </Box>

      <Flex
        maxW={{ base: '532px', lg: '1200px' }}
        width="100%"
        margin="auto"
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        minHeight="100vh"
        padding={{ base: '0 15px', lg: '0 5%' }}
      >
        <Box
          as="main"
          className={style.main}
          padding={{ base: '1.5em 0 0', lg: '4em 6% 0 0' }}
          width={{ lg: '50%' }}
          zIndex={2}
          background="#121212"
        >
          <Box
            width="120px"
            paddingBottom="2em"
            display={{ base: 'none', lg: 'block' }}
          >
            <Image
              src="/logo-white.png"
              alt="logo"
              objectFit="contain"
              objectPosition="left"
            />
          </Box>

          {(step === 'contact_info' || !step) && (
            <MarketShippingAddress setRates={addShippingRates} />
          )}
          {step === 'shipping_method' && <MarketShipping rates={rates} />}
        </Box>
        <Box
          background="#2d2d2d"
          as="aside"
          className={classNames([
            style.sidebar,
            { [style['aside--collapsed']]: collapseAside },
          ])}
          padding={{ base: '1.5em 0 0 0', lg: '4em 0 0 4%' }}
          flexShrink={0}
          width={{ lg: '40%' }}
        >
          <CartSummaryCard cart={cart} />
        </Box>
      </Flex>
    </Box>
  );
};
