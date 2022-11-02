import React, { FC, useState } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useProduct } from 'hooks/useProduct';
import { getCurrentProduct } from 'redux/actions/product';
import { ProductQuantitySelector } from '../QuantitySelector';
import { ProductPrice } from '../ProductCard/productPrice';
import { updateCartItems, deleteCartItems } from 'redux/actions/cart';
import { MiniCartItemLoader } from '../loaders';
import { CartItemDataType } from 'modules/MarketPlace/interfaces';

export const MiniCartItem: FC<{ cartItem: CartItemDataType }> = ({
  cartItem,
}) => {
  const product = cartItem.product;
  const { discountPrice, productLink } = useProduct(cartItem.product);
  const [loadingRemove, setLoadingRemove] = useState(false);

  const dispatch = useDispatch();

  const setCurrentProduct = () => {
    dispatch(getCurrentProduct(cartItem.product));
  };

  const updateQuantity = async (quantity: number) => {
    await dispatch(updateCartItems({ ...cartItem, quantity }, product));
  };

  const deleteCartItem = async (e: any) => {
    e.stopPropagation();

    try {
      setLoadingRemove(true);
      dispatch(deleteCartItems(cartItem.id, cartItem.userId));
    } catch (e) {
      // jude:(todo) handle error
    } finally {
      setLoadingRemove(false);
    }
  };

  return (
    <Flex marginBottom="20px" paddingBottom="20px" borderBottom="1px solid">
      {loadingRemove ? (
        <MiniCartItemLoader />
      ) : (
        <>
          <Link href={productLink}>
            <Box
              as="a"
              onClick={setCurrentProduct}
              display="inline-block"
              marginRight="10px"
            >
              <Box position="relative" display="flex" width="100px">
                {/* This Image controls the height incase the images are greater than 600 by 800 px */}
                <Image src="/trans-image.png" objectFit="cover" />

                <Box
                  width="100%"
                  position="absolute"
                  top="0"
                  height="100%"
                  flexGrow={1}
                >
                  <Image
                    src={product.meta?.images[0]}
                    alt="Product Image"
                    objectFit="cover"
                    objectPosition={'center'}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
          </Link>

          <Box flexGrow={1}>
            <Box display="flex" alignItems="flex-start" position="relative">
              <Box
                as="h1"
                marginBottom="10px"
                fontWeight="500"
                lineHeight={1.2}
                className="clipped-text"
                fontSize="14px"
                style={{
                  WebkitLineClamp: 4,
                }}
              >
                {product.name}
              </Box>

              <Box width="40px">
                <Box
                  onClick={deleteCartItem}
                  fontSize="35px"
                  fontWeight="300"
                  transform="rotate(45deg)"
                  as="button"
                  position="absolute"
                  top="-20px"
                  right="0px"
                  zIndex={5}
                >
                  +
                </Box>
              </Box>
            </Box>

            <Box
              fontWeight="500"
              fontSize="16px"
              display="flex"
              marginBottom="10px"
            >
              <Box>{cartItem.quantity}</Box> <Box margin="0 5px">x</Box>
              <ProductPrice
                amount={product.amount}
                discountPrice={discountPrice}
                colored
              />
            </Box>

            <ProductQuantitySelector
              value={cartItem.quantity}
              data={product}
              handleChange={updateQuantity}
              disableType
            />
          </Box>
        </>
      )}
    </Flex>
  );
};
