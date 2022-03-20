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
import queryString from 'query-string';
import { useRouter } from 'next/router';
import { basicTheme } from 'utils/constants/colorConstants';
import Pagination from 'components/Pagination';
import { getStyles } from './css';
import { getSocialHandleHeader } from 'utils/helpers';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const LeadsPage = ({
  leads,
  pageType = 'singleCampaign',
  socialColumns = [],
  pageSize = DEFAULT_PAGE_SIZE,
}: {
  leads: any;
  pageType?: string;
  socialColumns?: string[];
  pageSize?: string;
}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const style = getStyles(colorMode);

  const handleChange = (page: any) => {
    const params = router.query;
    params.page = page;
    router.push(`?${queryString.stringify(params)}`);
  };

  const handleSortChange = (sortBy: string) => {
    const params = router.query;
    params.sortBy = sortBy;
    router.push(`?${queryString.stringify(params)}`);
  };

  const status = pageType === 'allLeads' ? [] : ['status'];
  const sc: string[] = getSocialHandleHeader(socialColumns);

  const tableHeader = [
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Gender',
    'City|State|Zip Code',
    ...sc,
    ...status,
  ];

  const renderPagination = () => (
    <Pagination
      totalPages={leads?.meta.totalPages}
      currentPage={leads?.meta.currentPage}
      count={leads?.meta.count}
      onChange={handleChange}
      pageSize={pageSize}
    />
  );

  const renderSortButton = () => (
    <button type="button" onClick={() => handleSortChange('paymentStatus')}>
      <FontAwesomeIcon
        icon={faAngleDown as IconProp}
        style={{ margin: 'auto 10px' }}
      />
    </button>
  );

  return (
    <Box>
      <Flex width="full" alignItems="center" justify="space-between">
        <Box fontWeight="600" fontSize="24px">
          Records / Leads
        </Box>
        {renderPagination()}
      </Flex>

      {!leads?.data?.length ? (
        <Center flexDir="column" minH="80vh" height="100%">
          <Box as="h2" fontSize="40px" marginBottom="10px" fontWeight="600">
            You don't have any Leads yet
          </Box>
          <Box fontSize="18px">
            Copy your link from the campaign lists and share with your users
          </Box>
        </Center>
      ) : (
        <Flex w="100%" overflowX="auto" width="100%" padding="10px 0">
          <Box flexGrow={1}>
            <Table
              size="lg"
              marginTop={10}
              css={style}
              bg={basicTheme[colorMode]}
            >
              <Thead>
                <Tr>
                  {tableHeader.map((th, i) => (
                    <Th
                      fontSize="16px"
                      textTransform="capitalize"
                      fontFamily="Avenir"
                      key={`table_h_2_${i}`}
                      whiteSpace="nowrap"
                    >
                      {th}

                      {th === 'status' && renderSortButton()}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {leads?.data.map((data: any, i: number) => (
                  <Tr key={`lead_data_${i}`}>
                    <Td
                      whiteSpace="nowrap"
                      textTransform="capitalize"
                      fontSize="16px"
                    >
                      {data.firstName || 'N/A'}
                    </Td>
                    <Td
                      whiteSpace="nowrap"
                      textTransform="capitalize"
                      fontSize="16px"
                    >
                      {data.lastName || 'N/A'}
                    </Td>
                    <Td whiteSpace="nowrap">{data.email || 'N/A'}</Td>
                    <Td
                      textTransform="capitalize"
                      fontSize="16px"
                      whiteSpace="nowrap"
                    >
                      {data.phone}
                    </Td>
                    <Td
                      textTransform="capitalize"
                      fontSize="16px"
                      whiteSpace="nowrap"
                    >
                      {data.gender || 'N/A'}
                    </Td>
                    {/* <Td>
                      {(data.dateOfBirth &&
                        format(new Date(data.dateOfBirth), "yyyy-mm-dd")) ||
                        "N/A"}
                    </Td> */}
                    <Td
                      textTransform="capitalize"
                      fontSize="16px"
                      whiteSpace="nowrap"
                    >
                      {`${data.city || ''} ${data.state || ''} ${
                        data.postalCode || ''
                      }`}
                    </Td>
                    {socialColumns.length >= 1 &&
                      !!socialColumns[0] &&
                      socialColumns?.map((s: string, j: number) => (
                        <Td
                          key={`social_${j}`}
                          fontSize="16px"
                          whiteSpace="nowrap"
                        >
                          {data[s] || 'N/A'}
                        </Td>
                      ))}
                    {status.length > 0 && (
                      <Td fontSize="16px" whiteSpace="nowrap">
                        {data?.UserCampaigns?.at(0)?.paymentStatus}
                      </Td>
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      )}
      {renderPagination()}
    </Box>
  );
};

export default LeadsPage;
