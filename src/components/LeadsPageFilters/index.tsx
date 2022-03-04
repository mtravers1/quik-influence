import {
  Box,
  Flex,
  Accordion,
  useColorMode,
  AccordionItem,
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

const LeadsPageFilters = () => {
  const { colorMode } = useColorMode();
  const { handleChange, handleClick, filters } = usePanelFilters({
    search: '',
    status: [],
  });

  console.log(filters);

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
        <Box as="span" color={quikColorConstants.influenceRed} fontWeight={500}>
          Clear
        </Box>
      </Flex>

      <Box bg={basicTheme[colorMode]} p="12px">
        <Accordion allowMultiple defaultIndex={[0, 1]}>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <RecentActivity
                onChange={handleChange}
                isExpanded={isExpanded}
              />
            )}
          </AccordionItem>

          <AccordionItem border="none" mt="30px">
            {({ isExpanded }) => (
              <>
                <FilterOptionWithSelect
                  onChange={handleChange}
                  isExpanded={isExpanded}
                  title={filterOptionsWithSelectConstants[0].name}
                  // @ts-ignore
                  selectOptions={filterOptionsWithSelectConstants[0].options}
                  useTags={false}
                />
              </>
            )}
          </AccordionItem>

          <Input
            name="lead"
            placeholder="Lead"
            type="text"
            label="Search for"
            labelProps={{
              marginTop: '30px',
              color: quikColorConstants.greyDark,
              fontSize: '14px',
            }}
            value={filters.search}
            handleChange={handleChange}
          />

          <CustomButton
            bgColor={
              colorMode === 'light'
                ? quikColorConstants.greyDarker
                : quikColorConstants.influenceRed
            }
            marginTop="20px"
            marginBottom="25px"
          >
            Search
          </CustomButton>
        </Accordion>
      </Box>
    </Box>
  );
};

export default LeadsPageFilters;
