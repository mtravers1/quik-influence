import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

type DropdownSelectOption = {
  label: string;
  value: string;
};

interface DropdownSelectProp {
  size?: string;
  label?: string;
  options: DropdownSelectOption[];
}

const DropdownSelect = ({ size = "lg", label, options }: DropdownSelectProp) => {
  return (
    <FormControl>
      {!!label &&
        <FormLabel htmlFor="country">
          {label}
        </FormLabel>}
      <Select size={size} id="country" placeholder={`Select ${label || '---'}`}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
