import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const QuantitySelector: FC<{ value: number; handleChange: any }> = ({
  value,
  handleChange,
}) => {
  const increment = () => {
    handleChange(value + 1);
    console.log('clicked increment');
  };

  const decrement = () => {
    if (value > 1) {
      handleChange(value - 1);
      console.log('clicked decrement inner');
    }

    console.log('clicked decrement');
  };

  return (
    <Box display="flex">
      <Box
        as="input"
        background="#2a2a2a"
        type="button"
        fontSize="24px"
        value="-"
        width="38px"
        height="38px"
        border="1px solid #3e3e3e"
        onClick={decrement}
        flexShrink={0}
      />
      <Box
        as="label"
        overflow="hidden"
        htmlFor="quantity_633afcdd48dd1"
        height="1px"
        width="1px"
      >
        Fizzy Delta-8 Infused Seltzer quantity
      </Box>
      <Box
        as="input"
        type="number"
        id="quantity_633afcdd48dd1"
        step="1"
        min="1"
        // max=""
        name="quantity"
        value={value}
        title="Qty"
        size={4}
        placeholder=""
        inputMode="numeric"
        autoComplete="off"
        background="#000"
        borderTop="1px solid #3e3e3e"
        borderBottom="1px solid #3e3e3e"
        textAlign="center"
        height="38px"
        onChange={(e: any) => handleChange(Number(e.target.value))}
        color="#90fca0"
        fontWeight="bold"
        fontSize="20px"
        width="100%"
      />
      <Box
        as="input"
        background="#2a2a2a"
        type="button"
        value="+"
        fontSize="24px"
        width="38px"
        height="38px"
        border="1px solid #3e3e3e"
        onClick={increment}
        flexShrink={0}
      />
    </Box>
  );
};
