import { Box, Flex, Tag, TagCloseButton } from '@chakra-ui/react';
import DropdownSelect, {
  DropdownSelectOption,
} from 'components/DropdownSelect';
import React, { useEffect, useState } from 'react';

type MultiSelectProps = {
  selectOptions: DropdownSelectOption[];
  label: string;
  extraLabel?: string;
  handleChange: (event: any) => void;
  name: string;
  error?: string;
  labelProps?: any;
  selectProps?: any;
  initialvalue?: [];
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  selectOptions,
  label,
  labelProps,
  selectProps,
  extraLabel,
  handleChange,
  name,
  error,
  initialvalue,
}) => {
  const [selectedOpt, setSelectedOpts] = useState<Array<string>>(
    initialvalue || []
  );

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedOpt.includes(e.target.value)) {
      setSelectedOpts([...selectedOpt, e.target.value]);
    }
  };

  useEffect(() => {
    const event: any = {};
    event.target = {
      name: name,
      value: selectedOpt,
      type: 'multi-select',
      checked: undefined,
    } as unknown as HTMLInputElement;
    handleChange(event);
  }, [selectedOpt]);

  const handleRemoveOpt = (removeOpt: string) => {
    setSelectedOpts(selectedOpt.filter(opt => opt !== removeOpt));
  };

  return (
    <Box maxW="30rem" minW="30rem" pt={8} className="multi-select">
      <DropdownSelect
        onChange={handleMultiSelectChange}
        options={selectOptions || []}
        selectProps={{ height: '4.5rem', fontSize: '1.4rem', ...selectProps }}
        label={label}
        labelProps={labelProps}
        extraLabel={extraLabel}
        noValue={false}
        //  error={error}
      />
      {/* @ts-ignore */}
      <Flex flexWrap="wrap" spacing={4} mt={5}>
        {selectedOpt &&
          selectedOpt.map((opt, index) => (
            <Tag
              size="lg"
              key={`${opt}_${index}`}
              variant="solid"
              borderRadius="full"
              colorScheme="blackAlpha"
              mx={2}
            >
              {opt}
              <TagCloseButton
                data-test-id="remove-opt"
                onClick={() => handleRemoveOpt(opt)}
              />
            </Tag>
          ))}
      </Flex>
    </Box>
  );
};

export default MultiSelect;
