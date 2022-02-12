import { Input, InputProps } from '@chakra-ui/react';

const CustomInput = (props: InputProps) => (
  <Input
    width="full"
    padding="2rem"
    borderRadius={40}
    background="#fff"
    fontSize={14}
    {...props}
  />
);

export default CustomInput;
