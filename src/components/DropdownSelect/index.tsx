import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Select,
  SelectProps,
  Box,useColorMode
} from '@chakra-ui/react';
import React from 'react';
import quikColorConstants from 'utils/constants/colorConstants';

export type DropdownSelectOption = {
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
  error?: string;
  extraLabel?: string;
  name?: string;
}

const DropdownSelect = ({
  size = 'lg',
  label,
  options,
  onChange,
  inputId = '',
  labelProps,
  selectProps,
  error,
  extraLabel,
  name
}: DropdownSelectProp) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          fontSize="1.6rem"
          color={colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'}
          htmlFor={inputId}
          {...labelProps}
        >
          {label}
          {
           extraLabel && <Box as="span" fontSize="md" mx="4" >{extraLabel}</Box>
          }
        </FormLabel>
      )}
      <Select
        onChange={onChange}
        name={name}
        size={size}
        border="1px solid #D5D5DC"
        borderRadius="xl"
        id={inputId}
        data-test-id="select-component"
        {...selectProps}
      >
        <option value="" disabled selected>
        {`Select ${label || '---'}`}
        </option>
        {options.map(option => {
          return (
            <option
              data-testid="select-option"
              key={option.value}
              value={option.value} 
            >
              {option.label}
            </option>
          );
        })}
      </Select>
      {error && <FormErrorMessage fontSize="xl">{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default DropdownSelect;
