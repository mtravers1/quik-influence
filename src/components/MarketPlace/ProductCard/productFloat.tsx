import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { faExpand, faShare } from '@fortawesome/free-solid-svg-icons';
import { BookMark } from 'assets/bookmark';
import { BookMarked } from 'assets/bookmarked';
import styles from './style.module.scss';
import { ProductCardButton } from './productCardButton';
import { ProductActionButton } from './productActionButton';
import { ProductDataType } from 'modules/MarketPlace/interfaces';

export const ProductFloat: FC<{
  bookmarked: boolean;
  discount?: number;
  expandFunc?: any;
  stock: number;
  addToCart: any;
  productOptions: boolean;
  productLink: string;
  isProductInCart: boolean;
  product: ProductDataType;
}> = ({
  bookmarked,
  discount,
  expandFunc,
  stock,
  addToCart,
  productOptions,
  productLink,
  isProductInCart,
  product,
}) => {
  return (
    <>
      <Box position="absolute" top="18px" left="18px">
        {discount && (
          <Box
            padding="3px 7px"
            background="red"
            borderRadius="5px"
            fontWeight="bold"
            fontSize="12px"
            color="#fff"
            width="fit-content"
          >
            -{discount}%
          </Box>
        )}

        {stock === 0 && (
          <Box
            padding="3px 7px"
            background="#fff"
            color="red"
            borderRadius="5px"
            fontWeight="bold"
            fontSize="12px"
            marginTop="8px"
          >
            Out of stock
          </Box>
        )}
      </Box>

      {/* Product Buttons Block */}
      <Box
        position="absolute"
        top="18px"
        right="18px"
        className={styles['product-card_float']}
        display={{ base: 'none', md: 'block' }}
      >
        <Box>
          <ProductActionButton tooltip="Add to Wishlist">
            {bookmarked ? <BookMarked /> : <BookMark />}
          </ProductActionButton>
        </Box>
        {expandFunc && (
          <Box className={styles['product-card_float__slide']}>
            <ProductActionButton
              icon={faExpand}
              handleClick={expandFunc}
              tooltip="Quick View"
            />
          </Box>
        )}
        <Box className={styles['product-card_float__slide']}>
          <ProductActionButton icon={faShare} tooltip="Share" />
        </Box>
      </Box>

      <Box
        className={styles['product-card__option']}
        height="30px"
        display={{ base: 'none', md: 'block' }}
      >
        <Box></Box>

        <ProductCardButton
          className={styles['product-card_float__slide']}
          addToCart={addToCart}
          productOptions={productOptions}
          productLink={productLink}
          isProductInCart={isProductInCart}
          data={product}
        />
      </Box>
    </>
  );
};
