import React from "react";
import { AuthenticationProps } from "./types";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import quikColorConstants from "utils/constants/colorConstants";
import Login from "./Login";
import Register from "./Register";


const CustomTab: React.FC<{title:string}> = ({title}) => (
  <Tab
    color={quikColorConstants.influenceRedWithOpacity}
    _selected={{
      color: quikColorConstants.influenceRed,
      borderColor: quikColorConstants.influenceRed
    }}
    fontSize='xl'
  >
    {title}
  </Tab>
)


const AuthTab: React.FC<AuthenticationProps> = ({
  type
}) => {
  return (
    <Tabs
      mt={6}
    >
      <TabList>
        <CustomTab title="Login" />
        <CustomTab title="Sign up" />
      </TabList>

      <TabPanels>
        <TabPanel padding={0}>
          <Login />
        </TabPanel>
        <TabPanel  padding={0}>
          <Register />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default AuthTab