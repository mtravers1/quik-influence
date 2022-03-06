import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  useColorMode
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { css } from "@emotion/react";
import {
  recordsTableHead,
  leadsTableHead
} from "utils/constants/leadsPageTableData";
import {
  basicTheme,
  basicTextTheme,
  basicDarkTextTheme,
  tableBorderTheme
} from "utils/constants/colorConstants";
import { getAllLeads } from "redux/actions/leads";
import LoaderGif from "assets/loader.gif";
import Pagination from "components/Pagination/Index";
import NoRecordsMessage from "components/NoRecordsMessage";
import router from "next/router";

const LeadsPage = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const {
    leads: { allLeads }
  } = useSelector((state: any) => state);
  const [pageNumber, setPageNumber] = useState(
    router?.router?.query?.page || allLeads?.currentPage || 1
  );

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

  const handlePaginate = (page: number) => {
    setPageNumber(page);
    router.push(`?page=${page}`);
  };
  useEffect(() => {
    dispatch(getAllLeads({ page: pageNumber }));
  }, [router?.router?.query?.page]);

  return (
    <Box>
      <Box fontWeight="600" fontSize="24px">
        Records / Leads
      </Box>

      <Flex w="100%">
        <Box flexGrow={1}>
          <Table bg={basicTheme[colorMode]}>
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
          </Table>

          {allLeads?.loading ? (
            <Flex w="100%" justify="center">
              <Image
                width={100}
                height={100}
                objectFit="contain"
                src={LoaderGif}
              />
            </Flex>
          ) : (
            <>
              <Table marginTop="50px" css={style} bg={basicTheme[colorMode]}>
                <Thead>
                  <Tr>
                    {leadsTableHead.map((th, i) => (
                      <Th
                        fontSize="16px"
                        textTransform="capitalize"
                        fontFamily="Avenir"
                        key={`table_h_2_${i}`}
                        color="#000"
                      >
                        {th.name}
                      </Th>
                    ))}
                  </Tr>
                </Thead>

                <Tbody>
                  {allLeads?.rows?.map(
                    (data: { [key: string]: string }, i: number) => (
                      <Tr key={`lead_data_${i}`}>
                        <Td>{data.id}</Td>
                        <Td>{data.firstName}</Td>
                        <Td>{data.lastName}</Td>
                        <Td>{data.phone}</Td>
                        <Td>{data.age}</Td>
                        <Td>{data.createdAt}</Td>
                        {/* <Td>{data.cost}</Td>
                  <Td>{data.revenue}</Td> */}
                      </Tr>
                    )
                  )}
                </Tbody>
              </Table>
              {allLeads?.rows?.length === 0 && !allLeads.loading && (
                <NoRecordsMessage message={"No Records Found"} />
              )}

              <Pagination
                currentPage={allLeads.currentPage}
                count={allLeads.count}
                totalPages={allLeads.totalPages}
                onChange={handlePaginate}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default LeadsPage;
