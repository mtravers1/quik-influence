import Head from 'next/head';

import MainContent from 'components/MainContent';
import NotificationPage from 'modules/Notifications/NotificationPage';

const AdminNotification = () => {
  return (
    <>
      <Head>
        <title>Notifications - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <NotificationPage />
      </MainContent>
    </>
  );
};

export default AdminNotification;
