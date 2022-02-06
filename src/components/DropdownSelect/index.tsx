import { FormControl, FormErrorMessage, FormLabel, FormLabelProps, Select, SelectProps } from '@chakra-ui/react';
import React from 'react';
import quikColorConstants from 'utils/constants/colorConstants';

type DropdownSelectOption = {
  label: string;
  value: string;
};

interface DropdownSelectProp {
  size?: string;
  label?: string;
  options: DropdownSelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  inputId?: string;
  labelProps?: FormLabelProps;
  selectProps?: SelectProps;
  error?: string
}

const DropdownSelect = ({
  size = 'lg',
  label,
  options,
  onChange,
  inputId='',
  labelProps,
  selectProps,
  error
}: DropdownSelectProp) => {
  return (
    <FormControl isInvalid={!!error}>
      {
        !!label &&
          <FormLabel
            fontSize='1.6rem'
            color={quikColorConstants.black}
            htmlFor={inputId}
            {...labelProps}>
            {label}
          </FormLabel>
      }
      <Select
        onChange={onChange}
        size={size}
        border='1px solid #D5D5DC'
        borderRadius='xl' 
        id={inputId}
        placeholder={`Select ${label || '---'}`}
        data-test-id="select-component"
        {...selectProps}
      >
        {options.map(option => {
          return (
            <option data-testid="select-option" key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      {
        error &&
        <FormErrorMessage 
          fontSize='xl'>
            {error}
        </FormErrorMessage>
      }
    </FormControl>
  );
};

export default DropdownSelect;
