import {
  Box,
  Flex,
  Accordion,
  useColorMode,
  AccordionItem,
  Text
} from '@chakra-ui/react';
import quikColorConstants, {
  basicTheme,
  FilterTextTheme,
} from 'utils/constants/colorConstants';
import RecentActivity from 'components/Filter/RecentActivity';
import usePanelFilters from 'hooks/usePanelFilter';
import filterOptionsWithSelectConstants from 'components/Filter/filterOptionsWithSelectConstants';
import FilterOptionWithSelect from 'components/Filter/FilterOptionWithSelect';
import CustomButton from 'components/Button';
import Input from 'components/Input/TextInput';
import { TextInput } from "components/Input";
import { faCross, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent, useEffect, useState } from 'react';
import DropdownSelect from 'components/DropdownSelect';
import { allFilters } from './filters';
import { FILTER_SEARCH_TYPE } from './constants';
import { FilterValueType, SelectedFilterType } from './types';
import { useDispatch } from 'react-redux';
import { getAllLeads } from 'redux/actions/leads';


const FilterValue = ({ selectedFilter, handleFilterValueChange, filterIndex }: FilterValueType) => {

  if (selectedFilter.type === FILTER_SEARCH_TYPE.OPTIONS_SEARCH) {
    return (
      <DropdownSelect
        onChange={(e) => handleFilterValueChange(e, selectedFilter, filterIndex)}
        options={selectedFilter.options}
        placeholder="Filter"
        selected=""
      />

    )
  }
  return (
    <TextInput
      name={selectedFilter.name}
      handleChange={(e) => handleFilterValueChange(e, selectedFilter, filterIndex)}
      type={selectedFilter.type === FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH || selectedFilter.type === FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH ? 'text' : 'number'}
      placeholder={selectedFilter.name}
      value={selectedFilter.value}
      TextInputProps={{
        padding: "0.4rem",
        fontSize: ""
      }}
    />
  )
}


const LeadsPageFilters = () => {
  const { colorMode } = useColorMode();

  const emptyFilter: SelectedFilterType = {
    type: '',
    options: [],
    name: '',
    value: '',
    key: '',
    id: ''
  }

  const dispatch = useDispatch()

  const [showAddFilter, setShowAddFilter] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([emptyFilter])

  const getFilterOptions = () => {
    return allFilters.map(filter => ({
      label: filter.name,
      value: filter.id,
    }))
  }
  const addFilter = () => {
    setSelectedFilters(filters => [...filters, emptyFilter])
    setShowAddFilter(false)
  }

  const handleFilterKeyChange = (e: any, id: number) => {
    const selectedFilterObject: any = allFilters.find(val => val.id === e.target.value)
    if (!selectedFilterObject) return
    selectedFilterObject.value = ''
    setSelectedFilters(selectedFilters => selectedFilters.map((filters, index) => index === id ? selectedFilterObject : filters))
    setShowAddFilter(false)
  }

  const handleFilterValueChange = (e: ChangeEvent, selectedFilter: SelectedFilterType, filterIndex: number) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    setSelectedFilters(_selectedFilter => _selectedFilter.map((filters, index) => index === filterIndex ? { ...filters, value: value } : filters))
    setShowAddFilter(true)
  }


  const removeFilter = (filterIndex: number) => {
    setSelectedFilters(_selectedFilter => _selectedFilter.filter((filters, index) => index !== filterIndex))
  }

  const applyFilter = () => {
    const filters = {
      fuzzy: {},
      match: {},
      integerGreater: {},
      integerLess: {},
    } as any
    selectedFilters.forEach(selectedFilter => {
      const { type, value, key } = selectedFilter
      if (value) {
        switch (type) {
          case FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH:
            filters.fuzzy[key] = value;
            break;
          case FILTER_SEARCH_TYPE.INTEGER_SEARCH:
          case FILTER_SEARCH_TYPE.OPTIONS_SEARCH:
            case FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH:
            filters.match[key] = value;
            break;
          case FILTER_SEARCH_TYPE.INTEGER_GREATER_THAN_SEARCH:
            filters.integerGreater[key] = value;
            break;
          case FILTER_SEARCH_TYPE.INTEGER_LESS_THAN_SEARCH:
            filters.integerLess[key] = value;
            break;
          default:
            break;
        }
      }
    })
    dispatch(getAllLeads({}, { filters }))

  }

  return (
    <Box width="350px">
      <Flex
        padding="15px 20px"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        bg={basicTheme[colorMode]}
        borderRadius="10px 10px 0px 0px"
        marginBottom="7px"
      >
        <Box
          as="h3"
          fontSize="16px"
          color={quikColorConstants.greyDark}
          fontWeight={500}
        >
          Filter
        </Box>
        <Box as="span" color={quikColorConstants.influenceRed} fontWeight={500} cursor="pointer" onClick={() => setSelectedFilters([emptyFilter])}>
          Clear
        </Box>
      </Flex>

      <Box bg={basicTheme[colorMode]} p="12px">

        {
          selectedFilters.map((selectedFilter, index) =>
            <Flex key={index} justifyContent="flex-start" width="full" my={6}>
              <Box width="45%" pr={4}>
                <DropdownSelect
                  onChange={(e) => handleFilterKeyChange(e, index)}
                  options={getFilterOptions()}
                  placeholder="Filter"
                  noValue={selectedFilter?.type ? true : false}
                // selected=""
                />
              </Box>

              {
                selectedFilter?.type &&
                <>
                  <Box width="45%" pr={2}>
                    <FilterValue
                      selectedFilter={selectedFilter}
                      handleFilterValueChange={handleFilterValueChange}
                      filterIndex={index}
                    />
                  </Box>
                  <Box as="span" cursor="pointer" margin="auto" onClick={() => removeFilter(index)}>
                    <FontAwesomeIcon icon={faTimes as IconProp}
                      style={{ margin: "auto 5px" }} />
                  </Box>
                </>
              }

            </Flex>)
        }

        <Box as="div" p={3} borderTop="1px solid #ededed" mt={8}>
          <Box
            onClick={showAddFilter ? addFilter : () => { }}
            as={showAddFilter ? "a" : 'p'}
            cursor={showAddFilter ? "pointer" : "default"}
            color={showAddFilter ? "rgb(44 110 203)" : "rgb(140 145 150)"} >
            <FontAwesomeIcon icon={faPlus as IconProp}
              style={{ margin: "auto 5px" }} />
            Add Filter
          </Box>
        </Box>

        <CustomButton
          bgColor={
            colorMode === 'light'
              ? quikColorConstants.greyDarker
              : quikColorConstants.influenceRed
          }
          marginTop="20px"
          marginBottom="25px"
          type="button"
          onClick={applyFilter}
        >
          Apply Filter
        </CustomButton>
      </Box>
    </Box>
  );
};




export default LeadsPageFilters;
