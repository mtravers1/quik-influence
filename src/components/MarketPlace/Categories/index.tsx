import React from 'react';
import { Box, Image, Container } from '@chakra-ui/react';

interface BannerProps {
  icons: string;
  name: string;
  id: string;
}

const categories: BannerProps[] = [
  {
    id: '1',
    name: 'Main Drink',
    icons: '/icon.png',
  },
  {
    id: '1',
    name: 'Main Drink',
    icons: '/icon.png',
  },
];

export const ProductCategories = () => {
  return (
    <Container className="product--categories" padding="100px 0" display="flex">
      {categories.map((category: BannerProps) => (
        <Box
          key={category.id}
          className="product--categories__card"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            width="200px"
            height="200px"
            borderRadius="50%"
            overflow="hidden"
            className="product--categories__card__image"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={category.icons}
              alt="banner"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <Box>{category.name}</Box>
        </Box>
      ))}
    </Container>
  );
};
