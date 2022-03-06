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
import { css } from '@emotion/react';
import {
  recordsTableHead,
  leadsTableHead,
  dataBody,
} from 'utils/constants/leadsPageTableData';
import {
  basicTheme,
  basicTextTheme,
  basicDarkTextTheme,
  tableBorderTheme,
} from 'utils/constants/colorConstants';
import { format } from 'date-fns';
import Pagination from 'components/Pagination';

const LeadsPage = ({ leads }: { leads: any }) => {
  const { colorMode } = useColorMode();

  const style = css`
      & {
        border: 1px solid ${tableBorderTheme[colorMode]};

        td, th {
          border-top: 1px solid ${tableBorderTheme[colorMode]};
          border-bottom: 1px solid ${tableBorderTheme[colorMode]};
          padding: 15px;
        }

        th {
          color: ${basicDarkTextTheme[colorMode]}
        }

        td {
          color: ${basicTextTheme[colorMode]}
        }
      }
    }
  `;

  const handleChange = () => {};

  const tableHeader = [
    'Lead Name',
    'Phone',
    'Email',
    'Gender',
    'DOB',
    'Status',
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
            {/* <Table bg={basicTheme[colorMode]}>
            <Thead>
              <Tr>
                {recordsTableHead.map((th, i) => (
                  <Th
                    fontSize="16px"
                    fontFamily="Avenir"
                    textTransform="capitalize"
                    key={`table_h_1_${i}`}
                    border="1px solid #707070"
                    padding="15px"
                    color={basicTextTheme[colorMode]}
                  >
                    {th.name}
                  </Th>
                ))}
              </Tr>
            </Thead>
          </Table> */}

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
                    <Td whiteSpace="nowrap">
                      {data.firstName} {data.lastName}
                    </Td>
                    <Td whiteSpace="nowrap">{data.email}</Td>
                    <Td>{data.phone}</Td>
                    <Td>{data.gender}</Td>
                    <Td>
                      {data.dateOfBirth &&
                        format(data.dateOfBirth, 'yyyy-mm-dd')}
                    </Td>
                    <Td>{data?.UserCampaigns[0]?.paymentStatus}</Td>
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
