import '../styles/globals.css';
import '../styles/404.css';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "react-query";
import Fonts from 'utils/Fonts';
import { axiosInstance } from 'utils/helpers';
import theme from '../styles/theme';
import { wrapper } from '../store';
import { APP_NAME, NAV_NAME } from 'utils/constants/pageDataConstants';

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {

      }
    }
  });
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

QuikInfluenceApp.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    let nav:any;

    try {
       nav = await axiosInstance.get(
        `/content?resource=${APP_NAME}&page=${NAV_NAME}`
      );
    } catch (err) {
    }

    return {
      pageProps: {
        nav: nav.data.data,
      },
    };
  }

  return {};
};

export default wrapper.withRedux(QuikInfluenceApp);
