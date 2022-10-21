import { useState, FC } from 'react';
// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Navigation,
  Autoplay,
  Pagination,
  Thumbs,
} from 'swiper';
import { Box, Image, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LightgalleryProvider, LightgalleryItem } from './LightGallery';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([EffectFade, Navigation, Autoplay, Pagination, Thumbs]);

export const MarketProductCarousel: FC<{
  images: string[];
  showThumbs?: boolean;
  effect?: 'fade' | 'slide';
  title?: string;
}> = ({ images, showThumbs = false, effect = 'slide', title }) => {
  const [thumbSwiper, setThumbSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<any>(0);

  return (
    <Box
      width="100%"
      position="relative"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box height={{ base: '200px', small: '400px', lg: '550px' }}>
        <LightgalleryProvider>
          <Swiper
            effect={effect}
            navigation
            loop
            pagination={{ clickable: true }}
            id="main"
            thumbs={{ swiper: thumbSwiper }}
            onSlideChange={e => setActiveIndex(e.realIndex)}
            autoHeight={true}
          >
            {images.map((el, i) => (
              <SwiperSlide className="relative" key={`carousel_el_${i}`}>
                <Box position="absolute" width="100%" height="100%">
                  <Image
                    width="100%"
                    height="100%"
                    src={el}
                    alt="Product Image"
                    objectFit="cover"
                  />
                </Box>

                <Image src="/trans-image.png" objectFit="cover" />

                <Flex
                  position="absolute"
                  top="10px"
                  left="10px"
                  cursor="pointer"
                  background="#fff"
                  borderRadius="50%"
                  width="40px"
                  height="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <LightgalleryItem
                    src={el}
                    group={images}
                    thumb={el}
                    zIndex={10}
                  >
                    <FontAwesomeIcon
                      icon={faExpand}
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                      color="red"
                    />
                  </LightgalleryItem>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </LightgalleryProvider>
      </Box>

      {showThumbs && (
        <Box marginTop="20px" borderTop="1px solid grey" paddingTop="10px">
          <Swiper
            effect="slide"
            id="thumbs"
            onSwiper={setThumbSwiper}
            spaceBetween={5}
            slidesPerView={5}
          >
            {images.map(el => (
              <>
                <SwiperSlide key={`carousel_el_${el}_sub`}>
                  <Box
                    backgroundColor="#000"
                    cursor="pointer"
                    position="absolute"
                    top="0"
                    width="100%"
                    height="100%"
                  >
                    <Image
                      src={el}
                      alt="Product Image"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>

                  <Image src="/trans-image.png" objectFit="cover" />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};
