import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

type DropdownSelectOption = {
  label: string;
  value: string;
};

interface DropdownSelectProp {
  size?: string;
  label?: string;
  options: DropdownSelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelect = ({
  size = 'lg',
  label,
  options,
  onChange,
}: DropdownSelectProp) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="country">{label}</FormLabel>}
      <Select
        onChange={onChange}
        size={size}
        id="country"
        placeholder={`Select ${label || '---'}`}
        data-test-id="select-component"
      >
        {options.map(option => {
          return (
            <option data-testid="select-option" key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
