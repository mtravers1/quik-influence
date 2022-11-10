import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { PageTitle } from '../PageTitle';
import { CategoryDataType } from 'modules/MarketPlace/interfaces';
import { useNavLink } from '../NavBar/buttonList';
import { slugify } from 'utils/helpers';
import styles from './style.module.scss';

export const ProductCategories = () => {
  const {
    generals: { marketPlacePresets },
  } = useSelector((state: any) => state);

  const { baseLink } = useNavLink();

  return (
    <Box padding="100px" background="#000" margin="0px 0 50px">
      <PageTitle title="Our Categories" marginBottom="50px" />
      <Box display="flex" maxW="1200px" margin="auto" paddingX="15px">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {marketPlacePresets.categories?.map(
            (category: CategoryDataType, i: number) => (
              <SwiperSlide>
                <Link href={`${baseLink}/shop/${slugify(category.name)}`}>
                  <a>
                    <Box
                      key={`categories_${category.id}`}
                      className={styles['product--categories__card']}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginX="10px"
                    >
                      <Box
                        width="200px"
                        height="200px"
                        borderRadius="20px"
                        overflow="hidden"
                        className={styles['product--categories__card__image']}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        data-name="product--categories__card__image"
                      >
                        <Image
                          src={category.image}
                          alt="banner"
                          objectFit="cover"
                        />
                      </Box>
                      <Box fontWeight="bold">{category.name}</Box>
                    </Box>
                  </a>
                </Link>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Box>
    </Box>
  );
};
