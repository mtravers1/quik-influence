import MainContent from 'components/MainContent';
import ProfileOverview from 'modules/Profile/ViewProfile/ProfileOverview';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <ProfileOverview />
      </MainContent>
    </>
  );
};

export default Profile;
