import Head from 'next/head';

import MainContent from 'components/MainContent';
import AddEditNotification from 'modules/Notifications/AddEditNotification';

const CreateNotification = () => {
  return (
    <>
      <Head>
        <title>Create Notification - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <AddEditNotification />
      </MainContent>
    </>
  );
};

export default CreateNotification;
