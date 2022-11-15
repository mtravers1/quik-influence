import { FC } from 'react';
import { ProductPrice } from '../ProductCard/productPrice';
import { Box, Image, Flex } from '@chakra-ui/react';
import { CartItemDataType } from 'modules/MarketPlace/interfaces';

export const SummaryCard: FC<{
  cartItem: CartItemDataType;
}> = ({ cartItem }) => {
  const CampaignProduct = cartItem.CampaignProduct;

  return (
    <Flex padding="15px 0" borderBottom="1px solid" alignItems="center">
      <Box display="inline-block" marginRight="10px">
        <Box position="relative" display="flex" width="50px">
          {/* This Image controls the height incase the images are greater than 600 by 800 px */}

          <Flex
            fontSize="12px"
            background="red"
            width="20px"
            height="20px"
            position="absolute"
            zIndex={2}
            alignItems="center"
            justifyContent="center"
            fontWeight={450}
            top="-10px"
            right="-10px"
            rounded={'full'}
          >
            {cartItem.quantity}
          </Flex>

          <Image src="/trans-image.png" objectFit="cover" />

          <Box
            width="100%"
            position="absolute"
            top="0"
            height="100%"
            flexGrow={1}
          >
            <Image
              src={CampaignProduct.meta?.images[0]}
              alt="Product Image"
              objectFit="cover"
              objectPosition={'center'}
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Box
        as="h1"
        fontSize="12px"
        lineHeight="1.5em"
        fontWeight="bold"
        padding="0 15px 0 5px"
      >
        {CampaignProduct.name}
      </Box>

      <ProductPrice amount={CampaignProduct.amount} />
    </Flex>
  );
};
