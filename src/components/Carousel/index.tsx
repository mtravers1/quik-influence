import { useState, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Navigation,
  Autoplay,
  Pagination,
  Thumbs,
} from 'swiper';
import { Image, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LightgalleryProvider, LightgalleryItem } from './LightGallery';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([EffectFade, Navigation, Autoplay, Pagination, Thumbs]);

export const ProductCarousel: FC<{
  images: string[];
  showThumbs?: boolean;
  effect?: 'fade' | 'slide';
  title?: string;
}> = ({ images, showThumbs = false, effect = 'slide', title }) => {
  const [thumbSwiper, setThumbSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<any>(0);

  return (
    <Box width="100%" position="relative">
      <Box>
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
                <Image
                  src={el}
                  height={{ base: 'auto', lg: '600px' }}
                  objectFit="contain"
                  objectPosition="center"
                  width="100%"
                />

                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  cursor="pointer"
                  background="linear-gradient(rgba(0,0,0,0.8) 50%, transparent)"
                  padding="10px"
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
                        margin: 'auto 10px',
                        width: '30px',
                        height: '30px',
                      }}
                      color="#15bce7"
                    />
                  </LightgalleryItem>
                </Box>
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
                  <Box backgroundColor="#000">
                    <Image
                      src={el}
                      height={{ base: '80px', lg: '150px' }}
                      objectFit="contain"
                      objectPosition="center"
                      width="100%"
                      cursor="pointer"
                    />
                  </Box>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};
