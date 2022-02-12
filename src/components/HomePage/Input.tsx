import { Input, InputProps } from '@chakra-ui/react';

const CustomInput = (props: InputProps) => (
  <Input
    width="full"
    padding={{ base: '20px 10px 20px 50px', lg: '25px 10px 25px 50px' }}
    borderRadius={40}
    background="#fff"
    fontSize={14}
    {...props}
  />
);

export default CustomInput;
