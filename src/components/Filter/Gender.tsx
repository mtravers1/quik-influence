import {
  AccordionPanel,
  Flex,
  HStack,
  Stack,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react';
import DropdownSelect from 'components/DropdownSelect';
import React, { useEffect, useState } from 'react';
import { FilterItemProps } from 'types';
import CustomAccordionButton from './AccordionButton';

const Gender = ({ isExpanded, onChange }: FilterItemProps) => {
  const [selectedGender, setSelectedGender] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedGender.includes(e.target.value)) {
      setSelectedGender([...selectedGender, e.target.value]);
    }
  };

  const handleRemoveGender = (removeGender: string) => {
    setSelectedGender(selectedGender.filter(gender => gender !== removeGender));
  };

  useEffect(() => {
    onChange({ gender: selectedGender });
  }, [selectedGender]);

  return (
    <>
      <CustomAccordionButton label="Gender" isExpanded={isExpanded} />
      <AccordionPanel pl="unset" pb={4}>
        <DropdownSelect
          onChange={handleChange}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
        />
        <Flex flexWrap="wrap" spacing={4} mt={5}>
          {selectedGender &&
            selectedGender.map((gender, index) => (
              <Tag
                size="lg"
                key={`${gender}_${index}`}
                variant="solid"
                borderRadius="full"
                colorScheme="blackAlpha"
              >
                {gender}
                <TagCloseButton onClick={() => handleRemoveGender(gender)} />
              </Tag>
            ))}
        </Flex>
      </AccordionPanel>
    </>
  );
};

export default Gender;
