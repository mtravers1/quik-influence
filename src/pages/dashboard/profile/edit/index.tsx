import MainContent from 'components/MainContent';
import EditProfile from 'modules/Profile/EditProfile';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Edit profile - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <EditProfile />
      </MainContent>
    </>
  );
};

export default Profile;
