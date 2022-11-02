import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { ProductDataType } from 'modules/MarketPlace/interfaces';

export const ProductQuantitySelector: FC<{
  value: number;
  handleChange: any;
  data?: ProductDataType;
  disableType?: boolean;
}> = ({ handleChange, value, data, disableType }) => {
  const increment = () => {
    handleChange(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      handleChange(value - 1);
    }
  };

  return (
    <Box display="flex" height="45px">
      <Box
        as="input"
        background="#2a2a2a"
        type="button"
        fontSize="24px"
        value="-"
        width="38px"
        height="100%"
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
        {data?.name || ''}
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
        height="100%px"
        onChange={(e: any) => handleChange(Number(e.target.value))}
        color="#fff"
        fontWeight="500"
        fontSize="16px"
        width={{ base: '120px', md: '150px' }}
        disabled={disableType}
      />
      <Box
        as="input"
        background="#2a2a2a"
        type="button"
        value="+"
        fontSize="24px"
        width="38px"
        height="100%"
        border="1px solid #3e3e3e"
        onClick={increment}
        flexShrink={0}
      />
    </Box>
  );
};
