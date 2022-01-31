import {
  AccordionPanel,
  Flex,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react';
import DropdownSelect from 'components/DropdownSelect';
import React, { useEffect, useState } from 'react';
import { FilterItemProps } from 'types';
import CustomAccordionButton from './AccordionButton';

const FilterOptionWithSelect = ({ isExpanded, onChange, title = '', selectOptions }: FilterItemProps) => {
  const [selectedOpt, setSelectedAge] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedOpt.includes(e.target.value)) {
      setSelectedAge([...selectedOpt, e.target.value]);
    }
  };

  const handleRemoveOpt = (removeOpt: string) => {
    setSelectedAge(selectedOpt.filter(opt => opt !== removeOpt));
  };

  useEffect(() => {
    onChange({ [title]: selectedOpt });
  }, [selectedOpt]);

  return (
    <>
      <CustomAccordionButton label={title} isExpanded={isExpanded} />
      <AccordionPanel pl="unset" pb={4}>
        <DropdownSelect
          onChange={handleChange}
          options={selectOptions || []}
        />
        <Flex flexWrap="wrap" spacing={4} mt={5}>
          {selectedOpt &&
            selectedOpt.map((opt, index) => (
              <Tag
                size="lg"
                key={`${opt}_${index}`}
                variant="solid"
                borderRadius="full"
                colorScheme="blackAlpha"
              >
                {opt}
                <TagCloseButton data-test-id="remove-opt" onClick={() => handleRemoveOpt(opt)} />
              </Tag>
            ))}
        </Flex>
      </AccordionPanel>
    </>
  );
};

export default FilterOptionWithSelect;
