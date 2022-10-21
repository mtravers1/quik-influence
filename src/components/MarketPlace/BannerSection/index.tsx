import { Box, Image, Container } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Link from 'next/link';
import { EffectFade, Navigation, Pagination } from 'swiper';

interface BannerProps {
  image: string;
  title: string;
  subTitle: string;
  link: string;
  description: string;
  id: string;
}

const bannerObj: BannerProps[] = [
  {
    id: '1',
    title: 'title section 1',
    subTitle: 'sub title section 1',
    description: 'this is the description section 1',
    image: 'https://via.placeholder.com/2000x900',
    link: 'https://www.google.com',
  },
  {
    id: '2',
    title: 'title section 2',
    subTitle: 'sub title section 2',
    description: 'this is the description section 2',
    image: 'https://via.placeholder.com/2000x950',
    link: 'https://www.google.com',
  },
];

export const BannerSection = () => {
  return (
    <Box
      position="relative"
      zIndex={0}
      height={['424px', '500px', '600px', '750px']}
      width="100%"
    >
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        speed={1000}
      >
        {bannerObj.map((banner: BannerProps) => (
          <SwiperSlide key={`banner_comps_${banner.id}`}>
            <BannerComponent {...banner} />

            {/* <div>I'm Jude</div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export const BannerComponent = (props: BannerProps) => {
  const { image, title, subTitle, description, link } = props;
  return (
    <>
      <Box
        // className="text--overlay"
        height="100%"
        width="100%"
        zIndex={0}
        position="relative"
      >
        <Container
          padding="10px 15px"
          maxW="1536px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          zIndex={1}
        >
          <Box fontSize={['20px', '30px']} fontWeight="500">
            {subTitle}
          </Box>
          <Box
            fontSize={['40px', '50px', '60px']}
            fontWeight="bold"
            textTransform="capitalize"
          >
            {title}
          </Box>
          <Box fontSize={['16px', '20px']}>{description}</Box>
          <Box>
            <Box
              as="button"
              background="red"
              padding="10px 40px"
              borderRadius="5px"
              marginTop="20px"
            >
              <Link href={link}>
                <a className="anchor--default">Shop</a>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box position="absolute" top="0" zIndex={-1} width="100%" height="100%">
        <Image
          src={image}
          alt="banner"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    </>
  );
};
