import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import { basicTheme } from 'utils/constants/colorConstants';
import Pagination from 'components/Pagination';
import { getStyles } from './css';
import { getSocialHandleHeader, hasPermission, isAdmin } from 'utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import NoLeadsAvailable from './NoLeadsAvailable';
import LeadsDataPoint from './LeadsDataPoint';
import { useSelector } from 'react-redux';
import { MARKETING_ADMIN } from 'utils/constants';

const LeadsPage = ({
  leads,
  pageType = 'singleCampaign',
  socialColumns = [],
  pageSize,
}: {
  leads: any;
  pageType?: string;
  socialColumns?: string[];
  pageSize?: string;
}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const params = router.query;
  const style = getStyles(colorMode);
  const isLeadsDataPoint = leads?.resType === 'LEADS_DATA_POINTS';
  const isAllowed = isAdmin();
  const permissions = useSelector((state: any) => state.auth.permissions);
  const hasPerm = hasPermission([...MARKETING_ADMIN], permissions);

  const handleChange = (page: any) => {
    params.page = page;
    router.push(`?${queryString.stringify(params)}`);
  };

  const handleSortChange = (sortBy: string) => {
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

  if (hasPerm) {
    tableHeader.push('Posting Response');
  }

  const renderPagination = () => (
    <>
      {!isLeadsDataPoint && (
        <Pagination
          totalPages={leads?.meta.totalPages}
          currentPage={leads?.meta.currentPage}
          count={leads?.meta.count}
          onChange={handleChange}
          pageSize={pageSize}
        />
      )}
    </>
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
        <>
          {!isLeadsDataPoint ? (
            <NoLeadsAvailable isAdmin={isAllowed} />
          ) : (
            <LeadsDataPoint
              totalCount={leads?.meta?.totalCount}
              filteredCount={leads?.meta?.filteredCount}
              malecount={leads?.meta?.malecount}
              femalecount={leads?.meta?.femalecount}
            />
          )}
        </>
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
                {leads?.data.map((data: any, i: number) => {
                  if (
                    data?.UserCampaigns &&
                    !data?.UserCampaigns[0].isPostingSuccess &&
                    !hasPerm
                  )
                    return null;
                  return (
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
                      <Td whiteSpace="nowrap" fontSize="16px">
                        {data.email || 'N/A'}
                      </Td>
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
                      {hasPerm &&
                      data?.UserCampaigns &&
                      data?.UserCampaigns[0].postingResponse?.response ? (
                        <Td fontSize="16px" whiteSpace="nowrap">
                          {`${data?.UserCampaigns[0].postingResponse.response.result} |
                        ${data?.UserCampaigns[0].postingResponse.response.msg} |
                        ${data?.UserCampaigns[0].postingResponse.response.errors[0].error}`}
                        </Td>
                      ) : null}
                    </Tr>
                  );
                })}
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
