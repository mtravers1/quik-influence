import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Fonts from 'utils/Fonts';
import { axiosInstance } from 'utils/helpers';
import theme from '../styles/theme';
import { wrapper } from '../store';
import { CONTENT_URL } from 'utils/constants';
import { APP_NAME, NAV_NAME } from 'utils/constants/pageDataConstants';
import { login } from 'redux/actions/auth';
import '../styles/globals.css';
import '../styles/404.css';

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {},
    },
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const runBeforeLoad = async () => {
    setLoading(true);

    await dispatch(login());

    setLoading(false);
  };

  useEffect(() => {
    runBeforeLoad();
  }, []);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <ChakraProvider theme={theme}>
          <Fonts />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ChakraProvider>
      )}
    </>
  );
}

QuikInfluenceApp.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    let nav: any;

    try {
      nav = await axiosInstance.get(
        `${CONTENT_URL}?resource=${APP_NAME}&page=${NAV_NAME}`
      );
    } catch (err) {}

    return {
      pageProps: {
        nav: nav.data.data,
      },
    };
  }

  return {};
};

export default wrapper.withRedux(QuikInfluenceApp);
