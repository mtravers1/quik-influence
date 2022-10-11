import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import MainContent from 'components/MainContent';

const Scheduled = () => {
  return (
    <>
      <Head>
        <title>Scheduled Notification - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <Box>Scheduled Notification</Box>
      </MainContent>
    </>
  );
};

export default Scheduled;
