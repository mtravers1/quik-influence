import { Flex, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import React from 'react';

const OverviewSkeletonLoaders = () => {
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

export default OverviewSkeletonLoaders;
