import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from '@chakra-ui/react';
import {
  recordsTableHead,
  leadsTableHead,
  dataBody,
} from 'data/leadsPageTableData';

const LeadsPage = () => {
  return (
    <Box>
      <Box fontWeight="600" fontSize="24px">
        Records / Leads
      </Box>

      <Table>
        <Thead>
          <Tr>
            {recordsTableHead.map((th, i) => (
              <Th
                fontSize="16px"
                fontFamily="Avenir"
                textTransform="capitalize"
                key={`table_h_1_${i}`}
                border="1px solid #707070"
              >
                {th.name}
              </Th>
            ))}
          </Tr>
        </Thead>
      </Table>

      <Box></Box>
      <Table marginTop="50px" borderCollapse="collapse">
        <Thead>
          <Tr>
            {leadsTableHead.map((th, i) => (
              <Th
                fontSize="16px"
                textTransform="capitalize"
                fontFamily="Avenir"
                key={`table_h_2_${i}`}
                border="1px solid #707070"
              >
                {th.name}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {dataBody.map((data, i) => (
            <Tr border="1px solid #707070">
              <Td>{data.leadId}</Td>
              <Td>{data.name}</Td>
              <Td>{data.phoneNumber}</Td>
              <Td>{data.afflicate}</Td>
              <Td>{data.status}</Td>
              <Td>{data.createdAt}</Td>
              <Td>{data.cost}</Td>
              <Td>{data.revenue}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LeadsPage;
