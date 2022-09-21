import { FC } from 'react';
import { Box, Flex, Checkbox } from '@chakra-ui/react';

const CheckBox: FC<{
  name: string;
  value: any;
  handleChange: (event: any) => void;
  label: string;
  useCustom?: boolean;
}> = ({ name, value, handleChange, label, useCustom }) => {
  return (
    <Flex alignItems="center" paddingLeft="5px">
      <input
        type="checkbox"
        name={name}
        checked={value}
        onInput={handleChange}
        id={name}
        style={{ margin: '0', display: useCustom ? 'none' : 'block' }}
      />

      {useCustom && (
        <Box
          border="2px solid #fff"
          width="15px"
          height="15px"
          padding="1px"
          background="#fff"
          as="label"
          htmlFor={name}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {value && <Box background="#333" width="100%" height="100%"></Box>}
        </Box>
      )}

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
