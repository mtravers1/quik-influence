import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import WhereBox from "components/SearchFilters/WhereBox";
import { basicTheme } from 'utils/constants/colorConstants';


const SearchPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Flex width="full" alignItems="center" justify="space-between">
        <Box fontWeight="600" fontSize="24px">
          Search Leads
        </Box>
      </Flex>

      <Flex
        w="70%"
        p={6}
        marginTop={10}
        bg={basicTheme[colorMode]}
        wrap="wrap"
      >
        <Text textAlign="left" fontSize="2xl" fontWeight="medium" >
          Search users based on their properties
        </Text>
        <WhereBox />
      </Flex>
    </Box>
  )
}

export default SearchPage