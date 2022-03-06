import {
  Accordion,
  AccordionItem,
  Heading,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import React from 'react';
import { cardThemeColor } from 'utils/constants/colorConstants';
import FilterOptionWithSelect from './FilterOptionWithSelect';
import RecentActivity from './RecentActivity';
import filterOptionsWithSelectConstants from './filterOptionsWithSelectConstants';
import usePanelFilters from 'hooks/usePanelFilter';

const Filter = () => {
  const { colorMode } = useColorMode();

  const { handleChange, handleClick } = usePanelFilters({});

  return (
    <Stack p={10} bg={cardThemeColor[colorMode]}>
      <Heading size="md">Filter</Heading>
      <Accordion mt={5} allowMultiple>
        <AccordionItem border="none">
          {({ isExpanded }) => (
            <RecentActivity onChange={handleChange} isExpanded={isExpanded} />
          )}
        </AccordionItem>

        {filterOptionsWithSelectConstants.map((filterItem, index) => (
          <AccordionItem key={index} border="none">
            {({ isExpanded }) => (
              <FilterOptionWithSelect
                onChange={handleChange}
                isExpanded={isExpanded}
                title={filterItem.name}
                // @ts-ignore
                selectOptions={filterItem.options}
              />
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <CustomButton onClick={handleClick} variant="outline">
        Filter Search
      </CustomButton>
    </Stack>
  );
};

export default Filter;
