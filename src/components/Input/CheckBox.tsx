import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

const CheckBox: FC<{
  name: string;
  value: any;
  handleChange: (event: any) => void;
  label: string;
}> = ({ name, value, handleChange, label }) => {
  return (
    <Flex alignItems="center" paddingLeft="5px">
      <input
        type="checkbox"
        name={name}
        checked={value}
        onInput={handleChange}
        id={name}
        style={{ margin: '0' }}
      />
      <Box
        as="label"
        margin={0}
        marginLeft="15px"
        fontSize="16px"
        fontWeight="500"
        htmlFor={name}
        cursor="pointer"
      >
        {label}
      </Box>
    </Flex>
  );
};

export default CheckBox;
