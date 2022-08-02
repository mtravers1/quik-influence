import React, { useState, useEffect, FC } from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';

const Radio: FC<{
  name: string;
  inputs: any;
  handleSelect: any;
  value: any;
  label?: any;
  styles?: any;
}> = ({ name, inputs, handleSelect, value, label, styles = {} }) => {
  const [presentValue, setPresentValue] = useState(value);

  useEffect(() => {
    setPresentValue(value);
  }, [value]);

  const handleClick = (eName: any, eValue: any) => {
    setPresentValue(value);

    handleSelect({ target: { name: eName, value: eValue } });
  };

  const { colorMode } = useColorMode();

  const options = inputs.map((input: any, index: any) => (
    <Box
      className={`rad_options ${
        input.value === presentValue ? 'selected' : ''
      } ${colorMode}`}
      type="button"
      key={index}
      value={input.value}
      onClick={() => handleClick(name, input.value)}
      as="button"
    >
      {input.label}
    </Box>
  ));

  return (
    <Box className="input-div radx" w="100%" {...styles}>
      {label && (
        <Box
          // color={colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'}
          marginBottom="15px"
        >
          {label}
        </Box>
      )}
      <Flex flexDir="column">{options}</Flex>
    </Box>
  );
};

export default Radio;
