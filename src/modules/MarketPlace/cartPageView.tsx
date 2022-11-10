import { useRouter } from 'next/router';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { CartDataType, CartItemDataType } from 'modules/MarketPlace/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import { CartItemComp } from 'components/MarketPlace/Cart/cartItems';
import { ProductPrice } from 'components/MarketPlace/ProductCard/productPrice';
import Link from 'next/link';
import { clearCartItems } from 'redux/actions/cart';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';

export const CartPageView = () => {
  let { cart, user }: { cart: CartDataType; user: any } = useSelector(
    (state: any) => state
  );

  const dispatch = useDispatch();
  const { baseLink } = useNavLink();

  const handleCartClearing = () => {
    dispatch(clearCartItems(user?.id, cart?.id));
  };

  let checkoutLink: string = '';

  if (user?.id) {
    checkoutLink = `${baseLink}/checkout`;
  } else {
    checkoutLink = `${baseLink}/login?redirect=${baseLink}/checkout`;
  }

  return (
    <MarketPlaceLayout>
      <TitlePlace>CART</TitlePlace>

      {cart?.CampaignCartProducts.length ? (
        <TableContainer maxW="1200px" margin="auto" padding="0 15px">
          <Table>
            <Thead>
              <Tr display={{ base: 'none', lg: 'table-row' }}>
                {[
                  { name: 'IMAGE' },
                  { name: 'PRODUCT' },
                  { name: 'UNIT PRICE', isNumeric: true },
                  { name: 'QUANTITY' },
                  { name: 'SUBTOTAL', isNumeric: true },
                  { name: 'Action' },
                ].map(
                  (
                    header: { name: string; isNumeric?: boolean },
                    i: number
                  ) => (
                    <Th
                      key={`cart_table_header${i}`}
                      isNumeric={header.isNumeric}
                      // whiteSpace="nowrap"
                      fontSize="14px"
                      fontWeight="bold"
                      padding="12px 20px"
                      background="#333"
                      lineHeight="21px"
                    >
                      {header.name}
                    </Th>
                  )
                )}
              </Tr>
            </Thead>
            <Tbody>
              {cart?.CampaignCartProducts.map((cartItem: CartItemDataType) => (
                <CartItemComp cartItem={cartItem} />
              ))}

              <Tr
                maxW={{ base: '450px', lg: 'unset' }}
                marginX="auto"
                display={{ base: 'block', lg: 'table-row' }}
              >
                <Td
                  colSpan={6}
                  padding="20px 10px"
                  display={{ base: 'block', lg: 'table-cell' }}
                >
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Box
                      marginRight="10px"
                      fontSize="16px"
                      color="red"
                      fontWeight={500}
                    >
                      TOTAL:
                    </Box>{' '}
                    <ProductPrice amount={cart.total} />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Box display="flex" marginTop="50px" justifyContent="flex-end">
            <Box
              as="button"
              marginLeft="20px"
              background="red"
              fontWeight="600"
              padding="15px 40px"
              fontSize="16px"
              onClick={handleCartClearing}
            >
              CLEAR CART
            </Box>

            <Link href={checkoutLink}>
              <a>
                <Box
                  as="button"
                  marginLeft="20px"
                  background="#fff"
                  color="#333"
                  fontWeight="500"
                  padding="15px 40px"
                  fontSize="16px"
                >
                  PROCEED TO CHECKOUT
                </Box>
              </a>
            </Link>
          </Box>
        </TableContainer>
      ) : (
        <Box textAlign="center" fontSize="30px">
          There are no products in your cart!
        </Box>
      )}
    </MarketPlaceLayout>
  );
};
