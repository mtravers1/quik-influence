import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import style from './style.module.scss';
import { ProductFloat } from './productFloat';

interface ProductDataType {
  id: string;
  name: string;
  price: number;
  images: string[];
  bookmarked: boolean;
}

const productData = {
  id: '1',
  name: 'Product Name',
  price: 100,
  images: [
    'http://placeimg.com/510/600/tech',
    'http://placeimg.com/500/600/tech',
  ],
  bookmarked: false,
};

export const ProductCard: FC<{ data: ProductDataType }> = ({
  data = productData,
}) => {
  return (
    <Box className={style['product-card']}>
      <Box className={style['product-card__info_block']}>
        {/* Image Block */}
        <Box className={style['product-card__image']} position="relative">
          <Box className={style['thumb']}>
            <Image
              width={510}
              height={600}
              src={data.images[0]}
              alt="Product Image"
              objectFit="cover"
            />
          </Box>
          <Box
            position="absolute"
            top={0}
            className={style['thumb-second-image']}
          >
            <Image
              width={510}
              height={600}
              src={data.images[1]}
              alt="Product Image"
              objectFit="cover"
            />
          </Box>
        </Box>

        <ProductFloat bookmarked={data.bookmarked} />
      </Box>

      {/* External Elements block */}
      <Box></Box>
    </Box>
  );
};
