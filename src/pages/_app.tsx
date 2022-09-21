import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
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
import {
  createFormData,
  createTags,
  createFormInputs,
} from 'redux/actions/general';
import '../styles/date-of-birth-js.min.css';
import '../styles/globals.css';
import '../styles/404.css';

const excludedPages = ['/checkout/fizzy', '/', '/login', '/register'];
function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {},
    },
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const runBeforeLoad = async () => {
    dispatch(createFormData(pageProps?.formData));
    dispatch(createTags(pageProps?.tags));
    dispatch(createFormInputs(pageProps?.formInputs));
    setLoading(true);

    dispatch(login());

    setLoading(false);
  };

  useEffect(() => {
    runBeforeLoad();
    axiosInstance.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        if (
          err.response.status === 401 &&
          !excludedPages.includes(router.pathname)
        ) {
          localStorage.removeItem('_q_inf');
          router.push(`/login?redirect=${router.asPath}`);
        }
        return Promise.reject(err);
      }
    );
  }, [router.asPath, pageProps]);

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
  let nav: any;
  let formData: any;
  let formInputs: any;
  let tags: any;

  try {
    nav = await axiosInstance.get(
      `${CONTENT_URL}?resource=${APP_NAME}&page=${NAV_NAME}`
    );

    formData = await axiosInstance.get(`/admin/form-element`);
    formInputs = await axiosInstance.get(`/admin/form-inputs`);

    tags = await axiosInstance.get('/admin/tag');
  } catch (err) {
    console.log(err);
  }

  return {
    pageProps: {
      nav: nav?.data?.data,
      formData: formData?.data.data,
      tags: tags?.data.data,
      formInputs: formInputs?.data.data,
    },
  };
};

export default wrapper.withRedux(QuikInfluenceApp);
