import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import CustomButton from "components/Button";
import WhereBox from "components/SearchFilters/WhereBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAllLeads } from "redux/actions/leads";
import { basicTheme } from 'utils/constants/colorConstants';
import SearchResults from "./SearchResults";


const SearchPage = () => {
  const { colorMode } = useColorMode();
  const { formData } = useSelector((state: any) => state.generals)
  const { allLeads, loading } = useSelector((state: any) => state.leads);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useState<any>([{ id: 1 }])
  const [showResults, setShowResults] = useState(false)

 
  const handleAddQuery = () => {
    setSearchParams((params: any) => [...params, { id: params[params.length - 1].id + 1 }])
  }

  const handleRemoveQuery = (id: number) => {
    if (searchParams.length < 2) return
    setSearchParams((params: any) => params.filter((param: any) => param.id !== id))
  }

  const isDisabled = () => {
    // searchParams[searchParams.length-1]
  }

  const applySearch = () => {
    const filters: any = {}
    //populate filters
    formData
      .filter((data: any) => data.status === 'active')
      .forEach((data: any) => {
        filters[data.name] = {}
      });

    // Group all similar properties & signs into arrays and do a full text match for now 
    searchParams.forEach((searchParam: any) => {
      const { property, values, comparator } = searchParam
      if (property && values) {
        const { label } = property
        if (Object.keys(filters[label]).length && comparator in filters[label]) {
          if (Array.isArray(values)) {
            filters[label][comparator].push(...values)
          } else {
            filters[label][comparator].push(values)
          }
        } else {
          filters[label][comparator] = Array.isArray(values) ? values : [values]
        }
      }
    });
    setShowResults(true)
    dispatch(searchAllLeads({filters}))
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
          searchParams.map((params: any, index:number) =>
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
        <CustomButton width="" onClick={applySearch} 
          fontSize="md" py={4} px={10}>
          Apply Search
        </CustomButton>
      </Flex>
{
  showResults && 
      <SearchResults
        leads={allLeads}
        loading={loading}
      />}
    </Box>
  )
}

export default SearchPage