import { Box } from '@chakra-ui/layout';
import OverviewSkeletonLoaders from 'components/SkeletonLoaders';
import React from 'react';

const DashboardOverview = () => {
  return (
    <Box>
      <Box m={10}>
        <OverviewSkeletonLoaders />
        <OverviewSkeletonLoaders />
      </Box>
    </Box>
  );
};

export default DashboardOverview;
