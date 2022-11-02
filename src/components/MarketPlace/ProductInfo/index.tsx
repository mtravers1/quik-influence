import { FC, useState, useRef, useLayoutEffect } from 'react';
import { Box, Select, Flex } from '@chakra-ui/react';
import { ProductDataType } from 'modules/MarketPlace/interfaces';
import { ProductQuantitySelector } from '../QuantitySelector';
import { useProduct } from 'hooks/useProduct';
import { BookMark } from 'assets/bookmark';
import { BookMarked } from 'assets/bookmarked';
import { ProductActionButton } from '../ProductCard/productActionButton';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { ProductPrice } from '../ProductCard/productPrice';

export const ProductInfo: FC<{ product: ProductDataType }> = ({ product }) => {
  const {
    quantity,
    updateQuantity,
    bookmarked,
    discountPrice,
    updateProductVariant,
    addToCart,
    isProductInCart,
  } = useProduct(product);

  const [viewMore, setViewMore] = useState(0);
  const [showViewMoreButton, setShowViewMoreButton] = useState(false);
  const descriptionRef = useRef<any>();

  useLayoutEffect(() => {
    if (!product) return;

    if (descriptionRef.current?.clientHeight > 88) {
      setViewMore(7);
      setShowViewMoreButton(true);
    }
  }, [product]);

  const seeMore = () => {
    setViewMore(0);
  };

  const collapse = () => {
    setViewMore(7);
  };

  return (
    <>
      <Box as="p">{product.meta.stock} In Stock</Box>
      <Box marginTop="15px">
        <Box as="h2" fontSize="24px" fontWeight="600">
          {product.name}
        </Box>
        <Box as="h3" margin="15px 0" fontWeight="500">
          <ProductPrice
            amount={product.amount}
            discountPrice={discountPrice}
            fontSize="22px"
          />
        </Box>

        <Box
          as="p"
          className="clipped-text"
          style={{ '--number': viewMore } as any}
          ref={descriptionRef}
          fontSize="14px"
          lineHeight="22px"
          fontWeight={450}
        >
          {product.longDesc}
        </Box>
        {showViewMoreButton && (
          <Box
            marginTop="5px"
            textAlign="right"
            fontWeight="bold"
            fontSize="12px"
            cursor="pointer"
            onClick={viewMore === 0 ? collapse : seeMore}
          >
            {viewMore === 0 ? 'See Less' : 'See More'}
          </Box>
        )}
      </Box>
      <Box marginTop="20px" maxW="400px">
        {product?.meta?.options?.map((option, index) => (
          <Box marginBottom="20px" key={`product_option_selects_${index}`}>
            <Box as="label" marginBottom="5px">
              {option.key}
            </Box>
            <Select
              placeholder="Select option"
              fontSize="14px"
              height="unset"
              style={{
                padding: '10px 15px',
              }}
              onChange={e => {
                updateProductVariant({ [option.key]: e.target.value });
              }}
            >
              {option?.value?.map((valueOpt, index) => (
                <option
                  key={`product_option_selects_options_${index}`}
                  value={valueOpt}
                >
                  {valueOpt}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Box>

      <Flex marginTop="30px" flexDirection={{ base: 'column', md: 'row' }}>
        <ProductQuantitySelector
          value={quantity}
          handleChange={updateQuantity}
          data={product}
        />

        <ProductButton
          addToCart={addToCart}
          isProductInCart={isProductInCart}
          productOptions={product?.meta?.options?.length > 0}
        />
      </Flex>
      <Flex marginTop="20px">
        <Flex alignItems="center">
          <ProductActionButton small>
            {bookmarked ? <BookMarked /> : <BookMark />}
          </ProductActionButton>

          <Box
            as="span"
            fontSize="12px"
            display="inline-block"
            marginLeft="10px"
          >
            Add to wishlist
          </Box>
        </Flex>
        <Flex alignItems="center" marginLeft="20px">
          <ProductActionButton icon={faShare} small />

          <Box
            as="span"
            fontSize="12px"
            display="inline-block"
            marginLeft="10px"
          >
            Share
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

const ProductButton: FC<{
  addToCart: any;
  isProductInCart: boolean;
  productOptions: boolean;
}> = ({ addToCart, isProductInCart, productOptions }) => {
  return (
    <Box
      as="button"
      padding="10px 20px"
      background="red"
      fontWeight="bold"
      whiteSpace="nowrap"
      margin={{ base: '20px 0 0 0', md: '0 0 0 10px' }}
      flexGrow={1}
      onClick={addToCart}
    >
      {isProductInCart && !productOptions && 'Update cart'}
      {(!isProductInCart || productOptions) && 'Add To Cart'}
    </Box>
  );
};
