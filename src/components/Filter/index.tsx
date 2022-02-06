import {
  Accordion,
  AccordionItem,
  Heading,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import queryString from 'query-string';
import CustomButton from 'components/Button';
import React from 'react';
import { T } from 'types';
import { cardThemeColor } from 'utils/constants/colorConstants';
import FilterOptionWithSelect from './FilterOptionWithSelect';
import RecentActivity from './RecentActivity';
import { useRouter } from 'next/router';
import filterOptionsWithSelectConstants from './filterOptionsWithSelectConstants';

const Filter = () => {
  const router = useRouter() || { push: () => {} };
  const { colorMode } = useColorMode();
  const [filter, setFilter] = React.useState<T>({});

  const handleChange = (val: any) => {
    setFilter({ ...filter, ...val });
  };

  const handleClick = () => {
    const _queryString = queryString.stringify(filter, {
      arrayFormat: 'comma',
    });
    console.log(_queryString); // Result: age=26-32,18-25,33-50&gender=female,male
    router.push(`?${_queryString}`);
  };

  return (
    <Stack p={10} bg={cardThemeColor[colorMode]}>
      <Heading size="md">Filter</Heading>
      <Accordion mt={5} allowMultiple>
        <AccordionItem border="none">
          {({ isExpanded }) => (
            <RecentActivity onChange={handleChange} isExpanded={isExpanded} />
          )}
        </AccordionItem>

        {Object.keys(filterOptionsWithSelectConstants).map(
          (filterItem, index) => (
            <AccordionItem key={index} border="none">
              {({ isExpanded }) => (
                <FilterOptionWithSelect
                  onChange={handleChange}
                  isExpanded={isExpanded}
                  title={filterItem}
                  // @ts-ignore
                  selectOptions={filterOptionsWithSelectConstants[filterItem]}
                />
              )}
            </AccordionItem>
          )
        )}
      </Accordion>
      <CustomButton onClick={handleClick} variant="outline">
        Filter Search
      </CustomButton>
    </Stack>
  );
};

export default Filter;
