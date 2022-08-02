import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  FormControlProps,
} from '@chakra-ui/react';
import { MAX_CODES } from '../constants';

type QRInputProps = {
  value: string;
  onChange: (value: string) => void;
} & Omit<FormControlProps, 'onChange'>;

export default function QRInput({
  value,
  onChange,
  isInvalid,
  ...props
}: QRInputProps) {
  return (
    <FormControl isRequired isInvalid={isInvalid} {...props} mb="5">
      <FormLabel htmlFor="codes">Raw Data</FormLabel>
      <Textarea
        id="codes"
        placeholder="QR Code for Plain Text"
        resize="vertical"
        variant="outline"
        size="md"
        rows={5}
        value={value}
        onChange={e => onChange(e.target.value)}
      />

      {isInvalid && (
        <FormErrorMessage>
          Maximum QR allowed to generate is {MAX_CODES} codes.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
