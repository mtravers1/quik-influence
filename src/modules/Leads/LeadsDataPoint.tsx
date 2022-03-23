import { Box, Heading, Flex, useColorMode } from "@chakra-ui/react";
import { basicTheme } from "utils/constants/colorConstants";

const LeadsDataPoint = ({
  totalCount,
  filteredCount,
  malecount,
  femalecount
}: {
  totalCount: number;
  filteredCount: string;
  malecount: string;
  femalecount: string;
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box mt={20}>
      <Heading size="md">Total Number of Records: {totalCount}</Heading>
      <Flex mt={10} flexDir="row">
        <Box bg={basicTheme[colorMode]} p={16} mr={20}>
          <Heading size="3xl" mb={5}>
            {filteredCount}
          </Heading>
          <Heading size="md">Total Number of Results</Heading>
        </Box>
        <Box bg={basicTheme[colorMode]} p={16} mr={20}>
          <Heading size="3xl" mb={5}>
            {malecount}
          </Heading>
          <Heading size="md">Total Male Records</Heading>
        </Box>
        <Box bg={basicTheme[colorMode]} p={16} mr={20}>
          <Heading size="3xl" mb={5}>
            {femalecount}
          </Heading>
          <Heading size="md">Total Female Records</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default LeadsDataPoint;
