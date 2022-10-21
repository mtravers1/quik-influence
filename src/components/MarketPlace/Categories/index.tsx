import React from 'react';
import { Box, Image, Container } from '@chakra-ui/react';
import styles from './style.module.scss';
import { PageTitle } from '../PageTitle';

interface BannerProps {
  icons: string;
  name: string;
  id: string;
}

const categories: BannerProps[] = [
  {
    id: '1',
    name: 'Main Drink',
    icons: 'http://placeimg.com/510/600/any',
  },
];

export const ProductCategories = () => {
  return (
    <Box padding="100px" background="#000" margin="0px 0 50px">
      <PageTitle title="Our Categories" marginBottom="30px" />
      <Container display="flex">
        {categories.map((category: BannerProps, i) => (
          <Box
            key={`categories_${category.id}`}
            className={styles['product--categories__card']}
            display="flex"
            flexDirection="column"
            alignItems="center"
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
              <Image src={category.icons} alt="banner" objectFit="cover" />
            </Box>
            <Box>{category.name}</Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};
