import '../styles/globals.css';
import '../styles/404.css';
import { AppProps } from 'next/app';
import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import theme from '../styles/theme';
import { NextComponentType, NextPageContext } from 'next';
import { bgThemeColor, themeColor } from 'utils/colorConstants';
import { css } from '@emotion/react';

interface MainContentProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MainContent = ({ Component, pageProps }: MainContentProps) => {
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
          <Component {...pageProps} />
        </Box>
      </Flex>
    </Stack>
  );
};

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainContent Component={Component} pageProps={pageProps} />
    </ChakraProvider>
  );
}

export default QuikInfluenceApp;
