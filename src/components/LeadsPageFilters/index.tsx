import { Box, Flex, useColorMode, Text } from '@chakra-ui/react';
import quikColorConstants, { basicTheme } from 'utils/constants/colorConstants';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent, useEffect, useState } from 'react';
import DropdownSelect from 'components/DropdownSelect';
import { allFilters } from './filters';
import { FILTER_SEARCH_TYPE } from './constants';
import { FilterValueType, SelectedFilterType } from './types';
import { useRouter } from 'next/router';

const FilterValue = ({
  selectedFilter,
  handleFilterValueChange,
  filterIndex,
}: FilterValueType) => {
  if (selectedFilter.type === FILTER_SEARCH_TYPE.OPTIONS_SEARCH) {
    return (
      <DropdownSelect
        onChange={e => handleFilterValueChange(e, selectedFilter, filterIndex)}
        options={selectedFilter.options}
        placeholder="Filter"
        selected={selectedFilter.value ?? ''}
      />
    );
  }
  return (
    <TextInput
      name={selectedFilter.name}
      handleChange={e =>
        handleFilterValueChange(e, selectedFilter, filterIndex)
      }
      type={
        selectedFilter.type === FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH ||
        selectedFilter.type === FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH
          ? 'text'
          : 'number'
      }
      placeholder={selectedFilter.name}
      value={selectedFilter.value}
      TextInputProps={{
        padding: '0.4rem',
        fontSize: '',
      }}
    />
  );
};

type LeadsPageFiltersProps = {
  setAllSelectedFilters?: (_: any) => void;
};

const LeadsPageFilters = (props: LeadsPageFiltersProps) => {
  const { setAllSelectedFilters } = props;
  const { colorMode } = useColorMode();
  const router = useRouter();

  const emptyFilter: SelectedFilterType = {
    type: '',
    options: [],
    name: '',
    value: '',
    key: '',
    id: '',
  };

  const filters = {
    fuzzy: {},
    match: {},
    integerGreater: {},
    integerLess: {},
  } as any;

  const [showAddFilter, setShowAddFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([emptyFilter]);
  const [filterOptions, setFilterOptions] = useState([
    {
      label: '',
      value: '',
      disabled: false,
    },
  ]);

  const allFilterOptions = allFilters.map(filter => ({
    label: filter.name,
    value: filter.id,
    disabled: false,
  }));

  useEffect(() => {
    setFilterOptions(allFilterOptions);
  }, []);

  /**
   * TODO: THIS ISN'T OPTIMAL. NEED TO OPTIMIZE
   */
  useEffect(() => {
    if (Object.keys(selectedFilters).length && selectedFilters[0].value) {
      const seen: string[] = [];
      selectedFilters.forEach((filter: SelectedFilterType) => {
        seen.push(filter.key);
      });
      setFilterOptions(_filterOptions =>
        _filterOptions.map(filter =>
          seen.includes(filter.value)
            ? { ...filter, disabled: true }
            : { ...filter, disabled: false }
        )
      );
    }
  }, [selectedFilters]);

  const addFilter = () => {
    setSelectedFilters(filters => [...filters, emptyFilter]);
    setShowAddFilter(false);
  };

  const handleFilterKeyChange = (
    e: any,
    selectedFilter: SelectedFilterType
  ) => {
    const selectedFilterObject: any = allFilters.find(
      val => val.id === e.target.value
    );
    if (!selectedFilterObject) return;
    selectedFilterObject.value = '';
    setSelectedFilters(selectedFilters =>
      selectedFilters.map(filters =>
        filters === selectedFilter ? selectedFilterObject : filters
      )
    );
    setShowAddFilter(false);
  };

  const handleFilterValueChange = (
    e: ChangeEvent,
    selectedFilter: SelectedFilterType,
    filterIndex: number
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setSelectedFilters(selectedFilters =>
      selectedFilters.map((filters, index) =>
        filters === selectedFilter ? { ...filters, value: value } : filters
      )
    );
    setShowAddFilter(true);
  };

  const removeFilter = (filterToRemove: SelectedFilterType) => {
    setSelectedFilters(selectedFilters =>
      selectedFilters.filter(filter => filter !== filterToRemove)
    );
  };

  const handleClearFilters = () => {
    setSelectedFilters([emptyFilter]);
    setFilterOptions(allFilterOptions);
    const params = router.query;
    params.page = '1';
    router.push(`?${queryString.stringify(params)}`);

    //@ts-ignore
    setAllSelectedFilters(filters);
  };

  const applyFilter = () => {
    selectedFilters.forEach(selectedFilter => {
      const { type, value, key } = selectedFilter;
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
    });
    const params = router.query;
    params.page = '1';
    router.push(`?${queryString.stringify(params)}`);

    //@ts-ignore
    setAllSelectedFilters(filters);
  };

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
        <Box
          as="span"
          color={quikColorConstants.influenceRed}
          fontWeight={500}
          cursor="pointer"
          onClick={handleClearFilters}
        >
          Clear
        </Box>
      </Flex>

      <Box bg={basicTheme[colorMode]} p="12px">
        {selectedFilters.map((selectedFilter, index) => (
          <Flex key={index} justifyContent="flex-start" width="full" my={6}>
            <Box width="45%" pr={4}>
              <DropdownSelect
                onChange={e => handleFilterKeyChange(e, selectedFilter)}
                options={filterOptions}
                placeholder="Filter"
                noValue={selectedFilter?.type ? true : false}
                selected={selectedFilter?.type ? selectedFilter.id : ''}
              />
            </Box>

            {selectedFilter?.type && (
              <>
                <Box width="45%" pr={2}>
                  <FilterValue
                    selectedFilter={selectedFilter}
                    handleFilterValueChange={handleFilterValueChange}
                    filterIndex={index}
                  />
                </Box>
                <Box
                  as="span"
                  cursor="pointer"
                  margin="auto"
                  onClick={() => removeFilter(selectedFilter)}
                >
                  <FontAwesomeIcon
                    icon={faTimes as IconProp}
                    style={{ margin: 'auto 5px' }}
                  />
                </Box>
              </>
            )}
          </Flex>
        ))}

        <Box as="div" p={3} borderTop="1px solid #ededed" mt={8}>
          <Box
            onClick={showAddFilter ? addFilter : () => {}}
            as={showAddFilter ? 'a' : 'p'}
            cursor={showAddFilter ? 'pointer' : 'default'}
            color={showAddFilter ? 'rgb(44 110 203)' : 'rgb(140 145 150)'}
          >
            <FontAwesomeIcon
              icon={faPlus as IconProp}
              style={{ margin: 'auto 5px' }}
            />
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
          disabled={selectedFilters[0]?.value ? false : true}
        >
          Apply Filter
        </CustomButton>
      </Box>
    </Box>
  );
};

export default LeadsPageFilters;
