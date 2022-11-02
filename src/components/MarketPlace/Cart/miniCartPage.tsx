import { Box, Flex } from '@chakra-ui/react';
import { CartDataType } from 'modules/MarketPlace/interfaces';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatter } from 'utils/helpers';
import { useNavLink } from '../NavBar/buttonList';
import { MiniCartItem } from './miniCartItem';

export const MiniCartPage = () => {
  const { cart }: { cart: CartDataType } = useSelector((state: any) => state);

  const { query } = useRouter();
  const { closeMenu } = useNavLink();
  const { campaignId, campaignAdminId } = query;

  const cartPageLink = campaignAdminId
    ? `/market-place/${campaignId}/${campaignAdminId}/cart`
    : `/market-place/${campaignId}/cart`;

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      height="100%"
      flexGrow={1}
    >
      <Box maxHeight="70vh" flexGrow={1} overflow="scroll">
        {cart?.CampaignCartProducts?.map((cartItem: any, i: number) => (
          <MiniCartItem cartItem={cartItem} key={`mini_cart_el_${i}`} />
        ))}
      </Box>

      <Link href={cartPageLink}>
        <a onClick={closeMenu}>
          <Flex
            background="red"
            padding="5px 20px"
            borderRadius="5px"
            fontWeight="bold"
            fontSize="16px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>View Cart</Box>

            <Box color="red" background="#fff" padding="5px 10px">
              {formatter.format(cart.total)}
            </Box>
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};
