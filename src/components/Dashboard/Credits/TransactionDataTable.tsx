import {
  Table,
  Tbody,
  Thead,
  Th,
  Td,
  Tr,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import quikColorConstants from 'utils/constants/colorConstants';

interface Props {
  data: any[];
}

export const TransactionDataTable: React.FC<Props> = ({ data }: Props) => {
  return (
    <VStack alignItems="flex-start" spacing={'10'}>
      <Heading size="lg">Transaction History</Heading>
      <Table variant="creditsTransactionalTable">
        <Thead>
          <Tr>
            <Th fontSize="lg" textTransform="capitalize">
              Date
            </Th>
            <Th fontSize="lg" textTransform="capitalize">
              Transaction
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(el => {
            return (
              <Tr key={el.id}>
                <Td fontSize="md">{el.date}</Td>
                <Td>
                  <Text fontSize="md" letterSpacing={'tight'}>
                    <Text color={quikColorConstants.influenceRed} as="span">
                      ${el.amount}
                    </Text>{' '}
                    in credits added to account from card ending in{' '}
                    <Text color={quikColorConstants.influenceRed} as="span">
                      ${el.lastCardDigit}
                    </Text>
                  </Text>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </VStack>
  );
};
