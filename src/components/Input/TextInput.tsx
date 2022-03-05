import {
  Box,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';

type TextInputProps = {
  type: string;
  label?: string;
  labelProps?: FormLabelProps;
  TextInputProps?: InputProps;
  placeholder?: string;
  value: string | number;
  inputId?: string;
  handleChange: (event: any) => void;
  error?: string;
  formControlProps?: FormControlProps;
  name?: string;
  extraLabel?: string
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  type,
  labelProps,
  TextInputProps,
  placeholder = '',
  value,
  handleChange,
  label,
  inputId = '',
  error,
  formControlProps,
  extraLabel
}) => {
  const { colorMode } = useColorMode();
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      {!!label && (
        <FormLabel
          fontSize="1.6rem"
          color={colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'}
          htmlFor={inputId}
          data-testid="textInput-label"
          {...labelProps}
        >
          {label}
          {
            extraLabel && <Box as="span" fontSize="md" mx="4" >{extraLabel}</Box>
          }
        </FormLabel>
      )}
      <Input
        name={name}
        type={type}
        value={(value && type === "date") ? (new Date(value)).toISOString().substring(0,10) :value}
        onChange={handleChange}
        border={`1px solid ${borderThemeColor[colorMode]}`}
        size="xl"
        p="1rem"
        borderRadius="xl"
        placeholder={placeholder}
        {...TextInputProps}
      />
      {error && (
        <FormErrorMessage data-testid="textInput-error" fontSize="xl">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextInput;
