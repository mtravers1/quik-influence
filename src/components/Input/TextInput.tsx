import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';
import quikColorConstants from 'utils/constants/colorConstants';

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
};

const TextInput: React.FC<TextInputProps> = ({
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
}) => {
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      {!!label && (
        <FormLabel
          fontSize="1.6rem"
          color={quikColorConstants.black}
          htmlFor={inputId}
          data-testid="textInput-label"
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}
      <Input
        type={type}
        value={value}
        onChange={handleChange}
        border="1px solid #D5D5DC"
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
