import {
  AccordionPanel,
  Flex,
  HStack,
  Stack,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react';
import DropdownSelect from 'components/DropdownSelect';
import React, { useState, useEffect } from 'react';
import { FilterItemProps } from 'types';
import CustomAccordionButton from './AccordionButton';

const Status = ({ isExpanded, onChange }: FilterItemProps) => {
  const [selectedStatus, setSelectedStatus] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedStatus.includes(e.target.value)) {
      setSelectedStatus([...selectedStatus, e.target.value]);
    }
  };

  const handleRemoveStatus = (removeStatus: string) => {
    setSelectedStatus(selectedStatus.filter(status => status !== removeStatus));
  };

  useEffect(() => {
    onChange({ status: selectedStatus });
  }, [selectedStatus]);

  return (
    <>
      <CustomAccordionButton label="Status" isExpanded={isExpanded} />
      <AccordionPanel pl="unset" pb={4}>
        <DropdownSelect
          onChange={handleChange}
          options={[
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            { label: 'Incomplete', value: 'incomplete' },
            { label: 'Complete', value: 'complete' },
          ]}
        />
        <Flex flexWrap="wrap" spacing={4} mt={5}>
          {selectedStatus &&
            selectedStatus.map((status, index) => (
              <Tag
                size="lg"
                key={`${status}_${index}`}
                variant="solid"
                borderRadius="full"
                colorScheme="blackAlpha"
              >
                {status}
                <TagCloseButton onClick={() => handleRemoveStatus(status)} />
              </Tag>
            ))}
        </Flex>
      </AccordionPanel>
    </>
  );
};

export default Status;
