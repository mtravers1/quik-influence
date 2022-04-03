import { Box, Flex, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import React from 'react';

export const OverviewSkeletonLoaders = () => {
  return (
    <Flex mb={4}>
      <Grid
        h="300px"
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Skeleton w="100%" h="100%" />
        </GridItem>
        <GridItem colSpan={1}>
          <Skeleton w="100%" h="100%" />
        </GridItem>
        <GridItem colSpan={1}>
          <Skeleton w="100%" h="100%" />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Skeleton w="100%" h="100%" />
        </GridItem>
        <GridItem colSpan={2}>
          <Skeleton w="100%" h="100%" />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export const TablePageLoader = () => {
  return (
    <Flex mb={4} flexDir="column">
      <Box marginBottom="100px">
        <Skeleton w="200px" h="30px" />
      </Box>

      <Skeleton w="100%" h="50px" marginBottom="10px" />
      <Skeleton w="100%" h="50px" marginBottom="10px" />
      <Skeleton w="100%" h="50px" marginBottom="10px" />
      <Skeleton w="100%" h="50px" marginBottom="10px" />
      <Skeleton w="100%" h="50px" marginBottom="10px" />
    </Flex>
  );
};

export const SearchPageLoader = () => {
  return (
    <Flex mt={20} flexDir="column">
      <Skeleton w="40%" h="150px" marginBottom="20px" />
      <Skeleton w="400%" h="150px" marginBottom="10px" />
      <Skeleton w="100%" h="50px" marginBottom="10px" />
    </Flex>
  );
};
