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

const DashboardOverview = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box m={10}>
        {/* <OverviewSkeletonLoaders />
        <OverviewSkeletonLoaders /> */}
        <Flex mb={4}>
          <Grid
            w="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Flex
                padding={[6, 8]}
                background={cardThemeColor[colorMode]}
                borderRadius="8px"
                flexDirection="column"
              >
                <Flex justify="space-between" mb={5}>
                  <Flex
                    w="75%"
                    maxW="fit-content"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Heading size="md">Email Conversions</Heading>
                    <Divider mx={4} h="60%" orientation="vertical" />
                    <Text fontSize="md">March 2020</Text>
                  </Flex>
                  <IconButton
                    aria-label="menu options"
                    variant="ghost"
                    icon={<FontAwesomeIcon icon={faEllipsisH as IconProp} />}
                  />
                </Flex>
                <Box w="500px">
                  <Image
                    src="https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/pie-chart.png"
                    alt="Dan Abramov"
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex
                padding={[6, 8]}
                background={cardThemeColor[colorMode]}
                borderRadius="8px"
                flexDirection="column"
              >
                <Flex justify="space-between" mb={5}>
                  <Flex
                    w="75%"
                    maxW="fit-content"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Heading size="md">Revenue Conversions</Heading>
                    <Divider mx={4} h="60%" orientation="vertical" />
                    <Text fontSize="md">March 2020</Text>
                  </Flex>
                  <IconButton
                    aria-label="menu options"
                    variant="ghost"
                    icon={<FontAwesomeIcon icon={faEllipsisH as IconProp} />}
                  />
                </Flex>
                <Box>
                  <Image
                    src="https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/pie-chart.png"
                    alt="Dan Abramov"
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex
                padding={[6, 8]}
                background={cardThemeColor[colorMode]}
                borderRadius="8px"
                flexDirection="column"
              >
                <Flex justify="space-between" mb={5}>
                  <Flex
                    w="75%"
                    maxW="fit-content"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Heading size="md">Revenue Conversions</Heading>
                    <Divider mx={4} h="60%" orientation="vertical" />
                    <Text fontSize="md">March 2020</Text>
                  </Flex>
                  <IconButton
                    aria-label="menu options"
                    variant="ghost"
                    icon={<FontAwesomeIcon icon={faEllipsisH as IconProp} />}
                  />
                </Flex>
                <Box>
                  <Image
                    src="https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/pie-chart.png"
                    alt="Dan Abramov"
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Flex
                padding={[6, 8]}
                background={cardThemeColor[colorMode]}
                borderRadius="8px"
                flexDirection="column"
              >
                <Flex justify="space-between" mb={5}>
                  <Flex
                    w="75%"
                    maxW="fit-content"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Heading size="md">Revenue Conversions</Heading>
                    <Divider mx={4} h="60%" orientation="vertical" />
                    <Text fontSize="md">March 2020</Text>
                  </Flex>
                  <IconButton
                    aria-label="menu options"
                    variant="ghost"
                    icon={<FontAwesomeIcon icon={faEllipsisH as IconProp} />}
                  />
                </Flex>
                <Box>
                  <Image
                    src="https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/pie-chart.png"
                    alt="Dan Abramov"
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2}>
              <Flex
                padding={[6, 8]}
                background={cardThemeColor[colorMode]}
                borderRadius="8px"
                flexDirection="column"
              >
                <Flex justify="space-between" mb={5}>
                  <Flex
                    w="75%"
                    maxW="fit-content"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Heading size="md">Revenue Conversions</Heading>
                    <Divider mx={4} h="60%" orientation="vertical" />
                    <Text fontSize="md">March 2020</Text>
                  </Flex>
                  <IconButton
                    aria-label="menu options"
                    variant="ghost"
                    icon={<FontAwesomeIcon icon={faEllipsisH as IconProp} />}
                  />
                </Flex>
                <Box>
                  <Image
                    src="https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/pie-chart.png"
                    alt="Dan Abramov"
                  />
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardOverview;
