import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import CustomButton from "components/Button";
import WhereBox from "components/SearchFilters/WhereBox";
import { useEffect, useState } from "react";
import { basicTheme } from 'utils/constants/colorConstants';


const SearchPage = () => {
  const { colorMode } = useColorMode();
  const [searchParams, setSearchParams] = useState<any>([{id: 1}])

  const handleAddQuery = () => {
    setSearchParams((params: any) => [...params, { id: params[params.length-1].id + 1 }])
  }

  const handleRemoveQuery = (id: number) => {
    if(searchParams.length < 2) return
    setSearchParams((params: any) =>  params.filter((param: any) => param.id !== id))
  }

  useEffect(() => {
    console.log(searchParams)
  }, [searchParams])

  const isDisabled = () => {
    // searchParams[searchParams.length-1]
  }

  const applySearch = () => {
    console.log(searchParams)
    searchParams.forEach((searchParam) => {

    })
  }
  return (
    <Box>
      <Flex width="full" alignItems="center" justify="space-between">
        <Box fontWeight="600" fontSize="24px">
          Search Leads
        </Box>
      </Flex>

      <Flex
        w="80%"
        p={6}
        marginTop={10}
        bg={basicTheme[colorMode]}
        wrap="wrap"
      >
        <Text textAlign="left" fontSize="2xl" fontWeight="medium" >
          Search users based on their properties
        </Text>
        {
          searchParams.map((params: any, index) =>
            <WhereBox
              key={index}
              setSearchParams={setSearchParams}
              handleRemoveQuery={handleRemoveQuery}
              id={params.id}
            />)
        }

        <Flex width="full" mt={4} justifyContent="flex-end">
          <CustomButton
            onClick={handleAddQuery}
            variant='gray'
            disabled={false}
            fontSize="sm" py={1} px={4} width="">
            Add query
          </CustomButton>
        </Flex>
      </Flex>

      <Flex justifyContent="flex-end" width="80%" mt={6}>
          <CustomButton width="" onClick={applySearch} disabled={!searchParams[0].values}
            fontSize="md" py={4} px={10}>
            Apply Search
          </CustomButton>
      </Flex>
    </Box>
  )
}

export default SearchPage