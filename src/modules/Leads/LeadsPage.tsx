import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Center,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { basicTheme } from 'utils/constants/colorConstants';
import { format } from 'date-fns';
import Pagination from 'components/Pagination';
import { getStyles } from './css';

const LeadsPage = ({
  leads,
  pageType = 'singleCampaign',
}: {
  leads: any;
  pageType?: string;
}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const style = getStyles(colorMode);

  const handleChange = (page: any) => {
    router.push(`?page=${page}`);
  };

  const status = pageType === 'allLeads' ? [] : ['status'];

  const tableHeader = [
    'First Name',
    'Last Name',
    'Phone',
    'Email',
    'Gender',
    'DOB',
    ...status,
  ];

  return (
    <Box>
      <Box fontWeight="600" fontSize="24px">
        Records / Leads
      </Box>

      {!leads?.data?.length ? (
        <Center flexDir="column" minH="80vh" height="100%">
          <Box as="h2" fontSize="40px" marginBottom="10px" fontWeight="600">
            You don't have any Leads yet
          </Box>
          <Box fontSize="18px">
            Copy your link from the campaign lists amd share with your users
          </Box>
        </Center>
      ) : (
        <Flex w="100%">
          <Box flexGrow={1}>
            <Box></Box>
            <Table marginTop="50px" css={style} bg={basicTheme[colorMode]}>
              <Thead>
                <Tr>
                  {tableHeader.map((th, i) => (
                    <Th
                      fontSize="16px"
                      textTransform="capitalize"
                      fontFamily="Avenir"
                      key={`table_h_2_${i}`}
                      color="#000"
                      whiteSpace="nowrap"
                    >
                      {th}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {leads.data.map((data: any, i: number) => (
                  <Tr key={`lead_data_${i}`}>
                    <Td fontSize="15px" whiteSpace="nowrap">
                      {data.firstName}
                    </Td>
                    <Td fontSize="15px" whiteSpace="nowrap">
                      {data.lastName}
                    </Td>
                    <Td fontSize="15px" whiteSpace="nowrap">
                      {data.email}
                    </Td>
                    <Td fontSize="15px">{data.phone}</Td>
                    <Td fontSize="15px">{data.gender}</Td>
                    <Td fontSize="15px">
                      {data.dateOfBirth &&
                        format(new Date(data.dateOfBirth), 'yyyy-mm-dd')}
                    </Td>
                    <Td fontSize="15px">
                      {data?.UserCampaigns?.at(0)?.paymentStatus}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      )}

      <Pagination
        totalPages={leads.meta.totalPages}
        currentPage={leads.meta.currentPage}
        count={leads.meta.count}
        onChange={handleChange}
      />
    </Box>
  );
};

export default LeadsPage;
