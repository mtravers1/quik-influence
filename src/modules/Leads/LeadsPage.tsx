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
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { css } from '@emotion/react';
import {
  recordsTableHead,
  leadsTableHead,
} from 'utils/constants/leadsPageTableData';
import {
  basicTheme,
  basicTextTheme,
  basicDarkTextTheme,
  tableBorderTheme,
} from 'utils/constants/colorConstants';
import { getAllLeads } from 'redux/actions/campaigns';

const LeadsPage = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { leads } = useSelector((state: any) => state);

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

useEffect(() => {
  dispatch(getAllLeads());
}, []);

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
              {leads?.allLeads?.map((data: { [key: string]: string }, i: number) => (
                <Tr key={`lead_data_${i}`}>
                  <Td>{data.id}</Td>
                  <Td>{`${data.firstName} ${data.lastName}`}</Td>
                  <Td>{data.phone}</Td>
                  <Td>{data.age}</Td>
                  <Td>{data.createdAt}</Td>
                  {/* <Td>{data.cost}</Td>
                  <Td>{data.revenue}</Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default LeadsPage;
