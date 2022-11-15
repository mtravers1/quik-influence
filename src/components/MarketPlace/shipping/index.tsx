import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/market-place-checkout';
import Link from 'next/link';
import { useNavLink } from '../NavBar/buttonList';

export const MarketShipping = ({ rates }: { rates: any }) => {
  const { user } = useSelector((state: any) => state.auth);

  const { baseLink } = useNavLink();

  const getShippingDetailsFromUserProfile = () => {
    if (!user) {
      return {};
    }

    const { email, address } = user;

    return {
      email,
      address,
    };
  };

  const details = [
    { name: 'Contact', value: getShippingDetailsFromUserProfile().email },
    { name: 'Ship to', value: getShippingDetailsFromUserProfile().address },
  ];

  return (
    <Box w="100%">
      <Box
        marginBottom="40px"
        border="1px solid "
        paddingX="15px"
        borderRadius={4}
      >
        {details.map((detail, i: number) => (
          <Flex
            key={`details_${i}`}
            fontWeight="450"
            justifyContent="space-between"
            alignItems={{ lg: 'center' }}
            paddingY="10px"
            borderBottom={i === 0 ? '1px solid' : 'none'}
          >
            <Flex flexDir={{ base: 'column', lg: 'row' }}>
              <Box width="90px">{detail.name} </Box>
              <Box>{detail.value} </Box>
            </Flex>
            <Link href={`${baseLink}/checkout?step=contact_info`}>
              <a>
                <Box color="red">Change</Box>
              </a>
            </Link>
          </Flex>
        ))}
      </Box>

      <Box as="h2" fontSize="18px" fontWeight="450" marginBottom="15px">
        Shipping Method
      </Box>

      <Box>
        {/* {rates?.map((rate: any, i: number) => (
          <Flex key={`rates_${i}`}>
            <Box>
              <input type="radio" name="shipping" />
            </Box>
            <Box></Box>
          </Flex>
        ))} */}
      </Box>
    </Box>
  );
};
