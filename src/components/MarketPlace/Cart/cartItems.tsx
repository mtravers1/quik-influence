import React, { FC, useState } from 'react';
import { Box, Tr, Td, Image, BoxProps } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useProduct } from 'hooks/useProduct';
import { CartItemDataType } from 'modules/MarketPlace/interfaces';
import { ProductPrice } from '../ProductCard/productPrice';
import { ProductQuantitySelector } from '../QuantitySelector';
import { updateCartItems, deleteCartItems } from 'redux/actions/cart';
import NextImage from 'next/image';
import loader from 'assets/loader.gif';
import Link from 'next/link';

export const CartItemComp = ({ cartItem }: { cartItem: CartItemDataType }) => {
  const { discountPrice, productLink } = useProduct(cartItem.CampaignProduct);
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const updateQuantity = async (quantity: number) => {
    await dispatch(
      updateCartItems({ ...cartItem, quantity }, cartItem.CampaignProduct)
    );
  };

  const [loadingRemove, setLoadingRemove] = useState(false);

  const deleteCartItem = async (e: any) => {
    e.stopPropagation();

    try {
      setLoadingRemove(true);
      await dispatch(
        deleteCartItems(cartItem.id, user?.admin?.id || user?.user?.id)
      );
    } catch (e) {
      console.log(e);
      // jude:(todo) handle error
    } finally {
      setLoadingRemove(false);
    }
  };

  return (
    <Tr
      borderBottom="1px solid"
      pointerEvents={loadingRemove ? 'none' : 'all'}
      marginBottom={{ base: '50px', lg: '0' }}
      display={{ base: 'block', lg: 'table-row' }}
      maxW={{ base: '450px', lg: 'unset' }}
      marginX="auto"
    >
      <TableData>
        <Link href={productLink}>
          <a>
            <Box
              position="relative"
              display="flex"
              width={{ base: '100%', lg: '100px' }}
            >
              <Image src="/trans-image.png" objectFit="cover" />

              <Box
                width="100%"
                position="absolute"
                top="0"
                height="100%"
                flexGrow={1}
              >
                <Image
                  src={cartItem.CampaignProduct.meta.images[0]}
                  alt="Product Image"
                  objectFit="cover"
                  objectPosition={'center'}
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </a>
        </Link>
      </TableData>

      <TableData>
        <Link href={productLink}>
          <a>
            <Box fontSize="15px" fontWeight="500">
              {cartItem.CampaignProduct.name}
            </Box>
          </a>
        </Link>
      </TableData>
      <TableData isNumeric>
        <Box display={{ base: 'flex', lg: 'block' }}>
          <Box
            marginRight="10px"
            fontSize="16px"
            color="red"
            fontWeight={500}
            display={{ base: 'block', lg: 'none' }}
          >
            UNIT PRICE:
          </Box>

          <ProductPrice
            amount={cartItem.CampaignProduct.amount}
            discountPrice={discountPrice}
          />
        </Box>
      </TableData>

      <TableData>
        <Box
          display={{ base: 'flex', lg: 'block' }}
          justifyContent="space-between"
        >
          <ProductQuantitySelector
            value={cartItem.quantity}
            data={cartItem.CampaignProduct}
            handleChange={updateQuantity}
            disableType
          />

          <Box display={{ base: 'block', lg: 'none' }}>
            <TableActions
              productLink={productLink}
              deleteCartItem={deleteCartItem}
              loadingRemove={loadingRemove}
            />
          </Box>
        </Box>
      </TableData>

      <TableData isNumeric>
        <Box display={{ base: 'flex', lg: 'block' }}>
          <Box
            marginRight="10px"
            fontSize="16px"
            color="red"
            fontWeight={500}
            display={{ base: 'block', lg: 'none' }}
          >
            SUBTOTAL:
          </Box>

          <ProductPrice
            amount={cartItem.CampaignProduct.amount * cartItem.quantity}
          />
        </Box>
      </TableData>

      <TableData display={{ base: 'none', lg: 'table-cell' }}>
        <TableActions
          productLink={productLink}
          deleteCartItem={deleteCartItem}
          loadingRemove={loadingRemove}
        />
      </TableData>
    </Tr>
  );
};

interface tableDataProps extends BoxProps {
  isNumeric?: boolean;
}

const TableActions = ({
  productLink,
  deleteCartItem,
  loadingRemove,
}: {
  productLink: string;
  deleteCartItem: any;
  loadingRemove: boolean;
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Link href={productLink}>
        <a>
          <FontAwesomeIcon icon={faEdit} size="lg" />
        </a>
      </Link>

      <Box marginLeft="20px" as="button" onClick={deleteCartItem}>
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </Box>

      {loadingRemove && (
        <Box flexShrink={0} margin="5px 0 0 10px">
          <NextImage src={loader} alt="" width={40} height={40} />
        </Box>
      )}
    </Box>
  );
};

const TableData: FC<tableDataProps> = props => {
  const { isNumeric, children, ...rest } = props;

  return (
    <Td
      padding="12px 20px"
      lineHeight="24px"
      whiteSpace="normal"
      isNumeric={isNumeric}
      display={{ base: 'block', lg: 'table-cell' }}
      {...rest}
    >
      {children}
    </Td>
  );
};
