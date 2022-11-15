import { useEffect, useState } from 'react';
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
import classNames from 'classnames';

export const ProductFilters = () => {
  const { filterStatics, filters, handlePriceChange, applyFilters } =
    useProductFilters();
  const { baseLink } = useNavLink();
  const [collapseFilter, setCollapseFilter] = useState(false);
  const toggleCollapseAside = () => setCollapseFilter(!collapseFilter);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        setCollapseFilter(false);
      } else {
        setCollapseFilter(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Flex marginBottom="20px" justifyContent="flex-end">
        <Box
          display={{ base: 'block', md: 'none' }}
          width="100%"
          onClick={toggleCollapseAside}
          padding="10px 5px"
          background="red"
          maxW="100px"
          textAlign="center"
          fontWeight="bold"
          borderRadius={5}
          cursor="pointer"
        >
          Filter
        </Box>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none' }}
        h="100vh"
        position="fixed"
        background="rgba(0,0,0,0.7)"
        top={0}
        zIndex={10}
        onClick={toggleCollapseAside}
        className={classNames(styles['filter-container-backdrop'], {
          [styles['filter-container-backdrop--collapse']]: collapseFilter,
        })}
      ></Box>

      <Box
        marginRight="20px"
        flexShrink={0}
        className={classNames(styles['filter-container'], {
          [styles['filter-container--collapse']]: collapseFilter,
        })}
        // this is it
      >
        <Box position="relative">
          <Box
            cursor="pointer"
            onClick={toggleCollapseAside}
            marginLeft="15px"
            color="red"
            fontWeight={450}
            fontSize="40px"
            transform="rotateZ(-50deg)"
            position="absolute"
            top={0}
            right="10px"
            display={{ base: 'block', md: 'none' }}
          >
            +
          </Box>

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
      </Box>
    </>
  );
};
