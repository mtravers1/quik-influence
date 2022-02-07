import React, { useState } from "react";
import { AuthenticationProps } from "./types";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import quikColorConstants from "utils/constants/colorConstants";
import Login from "./Login";
import Register from "./Register";
import Router, { useRouter } from "next/router";

const CustomTab: React.FC<{ title: string }> = ({ title }) => (
  <Tab
    color={quikColorConstants.influenceRedWithOpacity}
    _selected={{
      color: quikColorConstants.influenceRed,
      borderColor: quikColorConstants.influenceRed
    }}
    fontSize="xl"
  >
    {title}
  </Tab>
);

const AuthTab: React.FC<AuthenticationProps> = ({ type }) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(type === "login" ? 0 : 1);

  const handleTabsChange = (index: any) => {
    setTabIndex(index);
    router.push(`/${index === 0 ? "login" : "signup"}`);
  };

  return (
    <Tabs mt={6} index={tabIndex} onChange={handleTabsChange}>
      <TabList>
        <CustomTab title="Login" />
        <CustomTab title="Sign up" />
      </TabList>

      <TabPanels>
        <TabPanel padding={0}>
          <Login />
        </TabPanel>
        <TabPanel padding={0}>
          <Register />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AuthTab;
