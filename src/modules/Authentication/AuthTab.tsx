import React, { useState } from 'react';
import { AuthenticationProps } from './types';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import quikColorConstants from 'utils/constants/colorConstants';
import Login from './Login';
import LoginOtp from './LoginOtp';
import Register from './Register';
import Router, { useRouter } from 'next/router';

const CustomTab: React.FC<{ title: string }> = ({ title }) => (
  <Tab
    color={quikColorConstants.influenceRedWithOpacity}
    _selected={{
      color: quikColorConstants.influenceRed,
      borderColor: quikColorConstants.influenceRed,
    }}
    fontSize="15px"
  >
    {title}
  </Tab>
);

const pageMap = {
  login: 0,
  'login-otp': 1,
  signup: 2,
};

const pageIndexArr = ['login', 'login-otp', 'signup'];

const AuthTab: React.FC<AuthenticationProps> = ({ type }) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(pageMap[type]);

  const handleTabsChange = (index: any) => {
    setTabIndex(index);
    router.push(`/${pageIndexArr[index]}`);
  };

  return (
    <Tabs mt={6} index={tabIndex} onChange={handleTabsChange}>
      <TabList>
        <CustomTab title="Login" />
        <CustomTab title="Login with otp" />
        <CustomTab title="Sign up" />
      </TabList>

      <TabPanels>
        <TabPanel padding={0}>
          <Login />
        </TabPanel>
        <TabPanel padding={0}>
          <LoginOtp />
        </TabPanel>
        <TabPanel padding={0}>
          <Register />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AuthTab;
