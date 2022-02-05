import { Stack, Flex, Divider, Box, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Header from "components/Header";
import SideBarMenu from "components/SideBarMenu";
import { bgThemeColor, themeColor } from "utils/constants/colorConstants";

interface MainContentProps {
  children: React.ReactElement;
}

const MainContent = ({ children }: MainContentProps) => {
  const { colorMode } = useColorMode();

  return (
    <Stack>
      <Header bgColor={bgThemeColor[colorMode]} color={themeColor[colorMode]} />
      <Flex
        flexDirection="row"
        css={css`
            & {
              margin-top: 1px !important;
            }
          `}
      >
        <SideBarMenu bgColor={bgThemeColor[colorMode]} colorMode={colorMode} />
        <Divider
          bgColor={bgThemeColor[colorMode]}
          orientation="vertical"
          height="100vh"
        />
        <Box
          width="100%"
          px={20}
          py={10}
          bgColor={bgThemeColor[colorMode]}
          color={themeColor[colorMode]}
        >
          {children}
        </Box>
      </Flex>
    </Stack>
  );
};

export default MainContent;
