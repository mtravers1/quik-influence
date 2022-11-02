import { FC } from 'react';
import { Box } from '@chakra-ui/react';

export const ProductPrice: FC<{
  discountPrice?: number;
  amount: number;
  fontSize?: string;
  colored?: boolean;
}> = ({ discountPrice, amount, fontSize = '16px', colored }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Box fontSize={fontSize} fontWeight="500">
      {discountPrice ? (
        <>
          <Box as="span" textDecoration="line-through" opacity="0.7">
            {formatter.format(amount)}
          </Box>
          <Box as="span" display="inline-block" marginLeft="20px">
            {formatter.format(discountPrice)}
          </Box>
        </>
      ) : (
        <Box as="span" color={colored ? 'red' : ''}>
          {formatter.format(amount)}
        </Box>
      )}
    </Box>
  );
};
