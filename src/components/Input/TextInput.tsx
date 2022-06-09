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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from '@chakra-ui/react';
import React, { SyntheticEvent } from 'react';
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
  extraLabel?: string;
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
  extraLabel,
}) => {
  const { colorMode } = useColorMode();
  const format = (val: string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, '');

  const setValue = (value: string) => {
    const event = {
      target: {
        name,
        value: value,
        type: 'number',
        checked: false,
      },
    } as unknown as SyntheticEvent;

    handleChange(event);
  };
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
          {extraLabel && (
            <Box as="span" fontSize="md" mx="4">
              {extraLabel}
            </Box>
          )}
        </FormLabel>
      )}
      {type === 'amount' ? (
        <NumberInput
          onChange={valueString => setValue(parse(valueString))}
          value={format(value.toString())}
          precision={2}
          step={0.2}
          size="xl"
          placeholder={placeholder}
        >
          <NumberInputField
            border={`1px solid ${borderThemeColor[colorMode]}`}
            p="1rem"
            borderRadius="xl"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : type === 'textarea' ? (
        <Textarea
          name={name}
          size="sm"
          value={value}
          border={`1px solid ${borderThemeColor[colorMode]}`}
          placeholder={placeholder}
          // @ts-ignore
          onChange={handleChange}
          resize="none"
          borderRadius={6}
          {...TextInputProps}
        />
      ) : (
        <Input
          name={name}
          type={type}
          value={
            value && type === 'date'
              ? new Date(value).toISOString().substring(0, 10)
              : value
          }
          onChange={handleChange}
          border={`1px solid ${borderThemeColor[colorMode]}`}
          size="xl"
          p="1rem"
          borderRadius="xl"
          placeholder={placeholder}
          {...TextInputProps}
        />
      )}
      {error && (
        <FormErrorMessage data-testid="textInput-error" fontSize="xl">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextInput;
