import { Flex, Heading } from '@chakra-ui/react';

import { QRIcon } from './Icons';
import QRSettings from './QRSettings';

export default function Header() {
  return (
    <Flex as="header" justify="space-between" align="center" shadow="md" p="5">
      <Heading fontSize={['xl', '2xl', '4xl']}>
        QRCode Generator <QRIcon ml="2" fontSize="larger" />
      </Heading>
      <QRSettings />
    </Flex>
  );
}
