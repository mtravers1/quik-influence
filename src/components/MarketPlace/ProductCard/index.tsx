import { Box, Image } from '@chakra-ui/react';
// import Image from 'next/image';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { ProductFloat } from './productFloat';
import classNames from 'classnames';
import { ProductCardButton } from './productCardButton';
import { ProductActionButton } from './productActionButton';
import { faExpand, faShare } from '@fortawesome/free-solid-svg-icons';
import { BookMark } from 'assets/bookmark';
import { BookMarked } from 'assets/bookmarked';
import Link from 'next/link';
import { useProduct } from 'hooks/useProduct';
import { ProductPrice } from './productPrice';
import { getCurrentProduct } from 'redux/actions/product';

export interface ProductDataType {
  id: string;
  name: string;
  amount: number;
  discount?: number;
  description?: string;
  longDesc: string;
  meta: {
    images: string[];
    stock: number;
    options: {
      key: string;
      value: string[];
    }[];
  };
}

const defaultproduct = {
  id: '',
  name: '',
  amount: 0,
  images: [],
  discount: 0,
  description: '',
  longDesc: '',
  meta: {
    images: [],
    stock: 0,
    options: [],
  },
};

export const ProductCard: FC<{
  data?: ProductDataType;
  openQuickViewModal: any;
}> = ({ data = defaultproduct, openQuickViewModal }) => {
  const { bookmarked, discountPrice, productLink, addToCart, isProductInCart } =
    useProduct(data);
  const dispatch = useDispatch();

  const handleOpenQuickViewModal = () => {
    openQuickViewModal(data);
  };

  const setCurrentProduct = () => {
    dispatch(getCurrentProduct(data));
  };

  return (
    <Box className={style['product-card']} w="100%">
      <Box className={style['product-card__info_block']}>
        {/* Image Block */}
        <Link href={productLink}>
          <a onClick={setCurrentProduct}>
            <Box
              className={style['product-card__image']}
              position="relative"
              display="flex"
            >
              {/* This Image controls the height incase the images are greater than 600 by 800 px */}
              <Image src="/trans-image.png" objectFit="cover" />

              <Box
                className={style['thumb']}
                width="100%"
                position="absolute"
                top="0"
                height="100%"
                flexGrow={1}
              >
                <Image
                  src={data.meta?.images[0]}
                  alt="Product Image"
                  objectFit="cover"
                  objectPosition={'center'}
                  width="100%"
                  height="100%"
                />
              </Box>
              {data.meta?.images[1] && (
                <Box
                  position="absolute"
                  top={0}
                  className={style['thumb-second-image']}
                  width="100%"
                  height="100%"
                  flexGrow={1}
                >
                  <Image
                    width="100%"
                    height="100%"
                    src={data.meta.images[1]}
                    alt="Product Image"
                    objectFit="cover"
                    objectPosition={'center'}
                  />
                </Box>
              )}
              <Box></Box>
            </Box>
          </a>
        </Link>

        <ProductFloat
          bookmarked={bookmarked}
          discount={data.discount}
          expandFunc={handleOpenQuickViewModal}
          stock={data.meta.stock}
          addToCart={addToCart}
          productOptions={!!data.meta.options?.length}
          productLink={productLink}
          isProductInCart={isProductInCart}
        />
      </Box>

      {/* External Elements block */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="20px"
      >
        <Box
          className={classNames(style['product-card__name'], 'clipped-text')}
          fontSize="16px"
          fontWeight="600"
          //@ts-ignore
          style={{ '--number': 1 }}
          marginBottom="5px"
        >
          <Link href={productLink}>
            <a onClick={setCurrentProduct}>{data.name}</a>
          </Link>
        </Box>

        <ProductPrice amount={data.amount} discountPrice={discountPrice} />

        <Box
          display={{ sm: 'block', md: 'none' }}
          width="100%"
          marginTop="20px"
        >
          <Box display="flex" justifyContent="center">
            <Box>
              <ProductActionButton>
                {bookmarked ? <BookMarked /> : <BookMark />}
              </ProductActionButton>
            </Box>
            {openQuickViewModal && (
              <Box marginLeft="10px">
                <ProductActionButton
                  icon={faExpand}
                  handleClick={handleOpenQuickViewModal}
                />
              </Box>
            )}
            <Box marginLeft="10px">
              <ProductActionButton icon={faShare} />
            </Box>
          </Box>

          <Box width="90%" marginTop="10px">
            <ProductCardButton
              productOptions={!!data.meta.options?.length}
              productLink={productLink}
              addToCart={addToCart}
              isProductInCart={isProductInCart}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
