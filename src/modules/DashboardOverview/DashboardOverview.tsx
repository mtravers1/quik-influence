import { Box } from '@chakra-ui/layout';
import { Flex, Grid, GridItem, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { cardThemeColor } from 'utils/constants/colorConstants';
import EmailConversions from './charts/EmailConversions';
import Revenue from './charts/Revenue';

const DashboardOverview = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box>
        {/* <OverviewSkeletonLoaders />
        <OverviewSkeletonLoaders /> */}
        <Flex mb={4}>
          <Grid
            w="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, minmax(0,1fr))"
            gap={4}
          >
            <GridItem
              rowSpan={1}
              colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px"
            >
              <EmailConversions />
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px"
            >
              <Revenue />
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px"
            >
              <EmailConversions />
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardOverview;
