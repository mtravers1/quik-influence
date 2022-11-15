
import { Box, Flex } from '@chakra-ui/react';
import { CartDataType } from 'modules/MarketPlace/interfaces';
import { ProductPrice } from '../ProductCard/productPrice';
import { SummaryCard } from './SummaryCard';

export const CartSummaryCard = ({ cart }: {cart: CartDataType}) => {
  return (
    <Box w="100%" marginBottom="20px">
      <Box maxHeight="70vh" flexGrow={1} overflow="scroll">
        {cart?.CampaignCartProducts?.map((cartItem: any, i: number) => (
          <SummaryCard cartItem={cartItem} key={`mini_cart_el_${i}`} />
        ))}
      </Box>

      <Box padding="20px 0" borderBottom="1px solid">
        <Flex
          marginBottom="10px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box as="h1" fontSize="12px" fontWeight="bold">
            Subtotal
          </Box>

          <ProductPrice amount={cart?.total} />
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Box as="h1" fontSize="12px" fontWeight="bold">
            Shipping
          </Box>
          <Box as="p" fontSize="12px" fontWeight="bold">
            Calculate at next step
          </Box>
        </Flex>
      </Box>

      <Flex marginTop="20px" justifyContent="space-between" alignItems="center">
        <Box as="h1" fontSize="16px" fontWeight="bold">
          Total
        </Box>

        <ProductPrice amount={cart?.total} fontSize="20px" />
      </Flex>
    </Box>
  );
};
