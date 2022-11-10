import React from 'react';
import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useProductFilters } from 'hooks/useProductFilter';
import { useNavLink } from '../NavBar/buttonList';
import { slugify } from 'utils/helpers';
import styles from './style.module.scss';

export const ProductFilters = () => {
  const { filterStatics, filters, handlePriceChange, applyFilters } =
    useProductFilters();
  const { baseLink } = useNavLink();

  return (
    <Box
      width={{ base: '280px', md: '280px', lg: '280px' }}
      marginRight="20px"
      flexShrink={0}
    >
      <Box
        borderTopRadius="5px"
        background="#000"
        width="100%"
        fontWeight="450"
        fontSize="15px"
      >
        <Box padding="8px 16px">CATEGORY</Box>

        {filterStatics?.categories.map((category: any) => (
          <Link
            href={`${baseLink}/shop/${slugify(category.name)}`}
            key={category.name}
          >
            <a>
              <Box padding="8px 16px 8px 30px">{category.name}</Box>
            </a>
          </Link>
        ))}
      </Box>

      <Box
        background="#000"
        width="100%"
        fontWeight="450"
        fontSize="15px"
        margin="5px 0"
      >
        <Flex padding="8px 16px" justifyContent="space-between">
          <Box>PRICE (USD)</Box>

          <Box color="Red" cursor="pointer" onClick={applyFilters}>
            APPLY
          </Box>
        </Flex>
        <Box padding="8px 16px">
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[filters.price.min, filters.price.max]}
            colorScheme="white"
            step={1000}
            min={0}
            max={1000000}
            onChange={handlePriceChange}
            value={[filters.price.min, filters.price.max]}
          >
            <RangeSliderTrack bg="red.200" borderColor="white">
              <RangeSliderFilledTrack bg="red" borderColor="white" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} borderColor="white" />
            <RangeSliderThumb index={1} borderColor="white" />
          </RangeSlider>

          <Flex className={styles['market-place-filter__input_section']}>
            <Box
              as="input"
              name="min"
              value={filters.price.min}
              onChange={handlePriceChange}
            />
            <Box margin="0 10px">-</Box>
            <Box
              as="input"
              name="max"
              value={filters.price.max}
              onChange={handlePriceChange}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
