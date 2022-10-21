import { useState, FC, useEffect } from 'react';
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
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import { basicTheme } from 'utils/constants/colorConstants';
import Pagination from 'components/Pagination';
import { useDebounce } from 'hooks/useDebounce';
import PaymentInfo from 'utils/constants/formData/paymentInfo';
import { PaymentInformation } from 'components/PaymentInfo';

export const CampaignInfluencers: FC<{
  fetchData: any;
  campaignId?: string;
}> = ({ fetchData, campaignId }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  let params = router.query;
  const pageSize = '20';
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    rows: [],

    totalPages: 0,
    currentPage: 0,
    count: 0,
  });
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentInfluencer, setCurrentInflucer] = useState<any>();
  const [debouncedSearch] = useDebounce(search, 500);

  const emptyData = data.rows.length === 0 && !isLoading;

  useEffect(() => {
    fetchData(setIsLoading, setData, params);
  }, [params]);

  const handleChange = (page: any) => {
    params.page = page;
    if (campaignId) {
      params.campaignId = campaignId;
    }
    router.push(`?${queryString.stringify(params)}`);
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
      header: 'Email',
      accessor: 'email',
    },
    {
      header: 'Date of birth',
      accessor: 'dateOfBirth',
    },
    {
      header: 'Phone Number',
      accessor: 'phone',
    },
    {
      header: 'Account Name',
      accessor: 'accName',
    },
    {
      header: 'Account Number',
      accessor: 'accNo',
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

  useEffect(() => {
    if (debouncedSearch === undefined) return;

    params.search = debouncedSearch;
    if (campaignId) {
      params.campaignId = campaignId;
    }
    router.push(`?${queryString.stringify(params)}`);
  }, [debouncedSearch]);

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };

  const resetFilters = () => {
    setSearch('');
    params = {};
    if (campaignId) {
      params.campaignId = campaignId;
    }
    router.push('');
  };

  const openModal = (influencer: any) => {
    setShowModal(true);
    setCurrentInflucer(influencer);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentInflucer(undefined);
  };

  return (
    <>
      <Box>
        <Flex width="full" alignItems="center" justify="space-between">
          <Box fontWeight="600" fontSize="24px">
            All Campaign Influencers
          </Box>
          {renderPagination()}
        </Flex>

        <Flex justifyContent="space-between" alignItems="flex-end">
          <Flex
            fontSize="16px"
            alignItems="flex-start"
            flexDirection="column"
            w="100%"
            maxW="300px"
          >
            <Box fontWeight="bold" flexShrink={0} marginBottom="10px">
              Search
            </Box>

            <Flex width="100%">
              <Input
                placeholder="Search Influencer"
                onChange={handleInputChange}
                value={search}
                fontSize="16px"
                padding="20px"
                borderRadius={0}
                width="100%"
              />
            </Flex>
          </Flex>

          <Box onClick={resetFilters} fontWeight="bold" cursor="pointer">
            Clear Filters
          </Box>
        </Flex>

        <Flex w="100%" overflowX="auto" width="100%" padding="10px 0">
          <Box flexGrow={1}>
            <Table size="lg" marginTop={10} bg={basicTheme[colorMode]}>
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
                      <Tr
                        key={`lead_data_row_${i}`}
                        onClick={() => openModal(data)}
                        cursor="pointer"
                      >
                        {tableHeader.map((th, j) => (
                          <Td
                            key={`lead_data_col_${j}`}
                            textTransform="capitalize"
                            fontSize="16px"
                            maxWidth="300px"
                            lineHeight="1.5"
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

      <Modal blockScrollOnMount={true} isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', xl: '40vw' }}
          p="8"
          mt="20%"
          borderRadius={0}
        >
          <ModalBody>
            <Box fontWeight={600} marginBottom="20px" fontSize="20px">
              Payment Information
            </Box>

            {currentInfluencer && (
              <PaymentInformation info={currentInfluencer.paymentInfo?.at(0)} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
