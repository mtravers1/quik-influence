import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { BillingPage } from './BillingPage';
import { PayNow } from './PayNow';

const links = [
  { name: 'Billing Address', value: 0 },
  { name: 'Review & Payment', value: 1 },
];

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

export const Payment = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} height="100%">
      <Box
        fontSize="18px"
        color="#0bcbfb"
        marginRight={{ base: '0', lg: '20px' }}
        marginBottom={{ base: '20px', lg: '0' }}
      >
        {links.map((link, i) => (
          <Box
            key={`lil_${i}`}
            onClick={() => setCurrentPage(link.value)}
            borderBottom="1px solid rgb(62, 62, 62)"
            padding="20px 0"
            background={
              link.value === currentPage ? 'rgba(226,226,226,0.2)' : ''
            }
            cursor="pointer"
            fontWeight="bold"
          >
            {link.name}
          </Box>
        ))}
      </Box>
      {currentPage === 0 && <BillingPage setCurrentPage={setCurrentPage} />}

      {currentPage === 1 && <PayNow />}
    </Flex>
  );
};
