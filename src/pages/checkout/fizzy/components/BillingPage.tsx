import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

const data: any = {
  optionalValues: {
    visitedStates: [],
  },
  firstName: 'Jude',
  lastName: 'Violet',
  phone: '08027444796',
  email: 'jjchinosoviolet@gmail.com',
  dateOfBirth: '2022-06-30',
  address: '32 Airport road',
  city: 'Warri',
  state: 'Delta',
  postalCode: '330102',
  campaignAdminId: 'f8547859-3e5f-42d1-919a-eec2b1568b26',
};

const main_data = [
  { name: 'First Name', value: data.firstName },
  { name: 'Last Name', value: data.lastName },
  { name: 'Phone', value: data.phone },
  { name: 'Email Address', value: data.email },
  { name: 'Address', value: data.address },
];

export const BillingPage: FC<{ setCurrentPage: Function }> = ({
  setCurrentPage,
}) => {
  const next = () => {
    setCurrentPage(1);
  };

  return (
    <Box
      border="1px solid rgb(62, 62, 62)"
      flexGrow={1}
      height="100%"
      padding="20px"
    >
      <Box
        borderBottom="1px solid rgb(62, 62, 62)"
        padding="10px 0 20px"
        marginBottom="30px"
        fontSize="24px"
        color="#0bcbfb"
        fontWeight="bold"
      >
        Billing details
      </Box>

      <Box className="billing-form">
        {main_data.map((detail: any, i) => {
          if (detail === 'optionalValues') return null;

          return (
            <Box key={`data_${i}`} marginBottom="25px">
              <Box
                as="label"
                fontSize="18px"
                color="#0bcbfb"
                textTransform="capitalize"
                fontWeight="bold"
                marginBottom="10px"
                display="inline-block"
              >
                {detail.name}
              </Box>
              <Box padding="10px" background="rgb(62, 62, 62)" fontSize="16px">
                {detail.value}
              </Box>
            </Box>
          );
        })}
      </Box>

      <Flex justifyContent="flex-end">
        <Box
          as="button"
          onClick={next}
          background="#fff"
          color="#000"
          padding="10px 30px"
          fontSize="18px"
          fontWeight="bold"
        >
          Continue
        </Box>
      </Flex>
    </Box>
  );
};
