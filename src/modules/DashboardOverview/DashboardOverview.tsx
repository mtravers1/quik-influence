import { Box, Divider, Heading, Text } from "@chakra-ui/layout";
import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  useColorMode
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import OverviewSkeletonLoaders from "components/SkeletonLoaders";
import React from "react";
import { cardThemeColor } from "utils/constants/colorConstants";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import EmailConversions from "./charts/EmailConversions";
import Revenue from "./charts/Revenue";
import Activity from "./charts/Activity";

const DashboardOverview = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box>
        {/* <OverviewSkeletonLoaders />
        <OverviewSkeletonLoaders /> */}
        <Flex mb={4} flexWrap="wrap">
          <Grid
            w="100%"
            templateColumns="repeat(3, minmax(0,1fr))"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px">
              <EmailConversions />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px">
              <Revenue />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px">
              <EmailConversions />
            </GridItem>
          </Grid>
          <Grid
            w="100%"
            py={5}
            gap={5}
            templateColumns="repeat(2, minmax(0,1fr))">
            <GridItem rowSpan={1} colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px">
              <Activity />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}
              background={cardThemeColor[colorMode]}
              borderRadius="8px">
              {/* <Revenue /> */}
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardOverview;
