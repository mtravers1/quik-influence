import { useState } from 'react';
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
import DropdownSelect from 'components/DropdownSelect';
import { useEffect } from 'react';
import { axiosInstance } from 'utils/helpers';

export const OrdersTable = ({}: {}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const params = router.query;
  const style = getStyles(colorMode);
  const pageSize = '20';
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    rows: [],

    totalPages: 0,
    currentPage: 0,
    count: 0,
  });

  const emptyData = data.rows.length === 0 && !isLoading;

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(
        `/users/payments/a3041737-60a0-469e-afd6-f33f25f2b066?${queryString.stringify(
          params
        )}`
      );
      setData({
        ...res.data.data,
        rows: res.data.data.rows.map((row: any) => {
          return {
            ...row,
            firstName: row.User.firstName,
            lastName: row.User.lastName,
            address: row.meta?.shipmentMeta?.to?.street1,
            city: row.meta?.shipmentMeta?.to?.city,
            numberOfProducts:
              row.meta?.shipmentMeta?.meta?.parcels?.length || 0,
          };
        }),
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  const handleChange = (page: any) => {
    params.page = page;
    router.push(`?${queryString. (params)}`);
  };

  const tableHeader = [
    {
      header: 'First Name',
      accessor: 'firstName',
    },
    {
      header: 'Last Name',
      accessor: 'lastName',
    },
    {
      header: 'Address',
      accessor: 'address',
    },
    {
      header: 'City',
      accessor: 'city',
    },
    {
      header: 'Description',
      accessor: 'description',
    },
    {
      header: 'Amount',
      accessor: 'amount',
    },
    {
      header: 'Number of Products',
      accessor: 'numberOfProducts',
    },
    {
      header: 'status',
      accessor: 'status',
    },
  ];

  const renderPagination = () => (
    <>
      <Pagination
        totalPages={data?.totalPages}
        currentPage={data?.currentPage}
        count={data?.count}
        onChange={handleChange}
        pageSize={pageSize}
      />
    </>
  );

  const onSelect = (e: any) => {
    if (data.rows.length === 0) return;
    const { value } = e.target;

    params.status = value;
    router.push(`?${queryString.stringify(params)}`);
  };

  return (
    <Box>
      <Flex width="full" alignItems="center" justify="space-between">
        <Box fontWeight="600" fontSize="24px">
          Records / Leads
        </Box>
        {renderPagination()}
      </Flex>

      <Flex justifyContent="flex-end">
        <Flex fontSize="16px" alignItems="center">
          <Box fontWeight="bold" flexShrink={0} marginRight="20px">
            Filter By
          </Box>

          <DropdownSelect
            onChange={onSelect}
            options={[
              { label: 'All', value: '' },
              { label: 'Success', value: 'SUCCESS' },
              { label: 'Pending', value: 'PENDING' },
            ]}
            placeholder="Filter"
            selected={params.filter as string}
          />
        </Flex>
      </Flex>

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
                    {th.header}
                  </Th>
                ))}
              </Tr>
            </Thead>

            {!isLoading && (
              <Tbody>
                {data.rows.map((data: any, i: number) => {
                  return (
                    <Tr key={`lead_data_row_${i}`}>
                      {tableHeader.map((th, j) => (
                        <Td
                          key={`lead_data_col_${j}`}
                          whiteSpace="nowrap"
                          textTransform="capitalize"
                          fontSize="16px"
                        >
                          {data[th.accessor] || 'N/A'}
                        </Td>
                      ))}
                    </Tr>
                  );
                })}
              </Tbody>
            )}
          </Table>
        </Box>
      </Flex>

      <Box fontSize="16px" fontWeight="bold">
        {isLoading && 'Loading...'}
        {emptyData && 'No records found'}
      </Box>

      {renderPagination()}
    </Box>
  );
};
