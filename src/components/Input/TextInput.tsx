import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import quikColorConstants, { borderThemeColor } from 'utils/constants/colorConstants';

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
  const {colorMode} = useColorMode()
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
        </FormLabel>
      )}
      <Input
        type={type}
        value={value}
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
