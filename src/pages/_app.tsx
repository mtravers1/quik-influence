import '../styles/globals.css';
import '../styles/404.css';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from 'utils/Fonts';
import { axiosInstance } from 'utils/helpers';
import theme from '../styles/theme';
import { wrapper } from '../store';
import { APP_NAME, NAV_NAME } from 'utils/constants/pageDataConstants';

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

QuikInfluenceApp.getInitialProps = async () => {
  // console.log(req, res);

  // const cookies = new Cookies(req, res);
  // const staicCoookie = cookies.get('jayne-static');

  // console.log(staicCoookie);

  if (typeof window === 'undefined') {
    let nav:any;

    try {
      const nav = await axiosInstance.get(
        `/content?resource=${APP_NAME}&page=${NAV_NAME}`
      );
    } catch (err) {
      //
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
