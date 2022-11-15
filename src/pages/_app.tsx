import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Fonts from 'utils/Fonts';
import { axiosInstance, eraseCookie, getCookie } from 'utils/helpers';
import theme from '../styles/theme';
import { wrapper } from '../store';
import { CONTENT_URL } from 'utils/constants';
import { APP_NAME, NAV_NAME } from 'utils/constants/pageDataConstants';
import { login } from 'redux/actions/auth';
import {
  createFormData,
  createTags,
  createFormInputs,
  saveMarketPlacePresets,
} from 'redux/actions/general';

// swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/market-place.scss';
import '../styles/date-of-birth-js.min.css';
import '../styles/globals.css';
import '../styles/404.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { getAllCartItems } from 'redux/actions/cart';
import { CategoryDataType } from 'modules/MarketPlace/interfaces';
import { getCartItems } from 'modules/MarketPlace/serverSideFunc';

const excludedPages = [
  '/checkout/fizzy',
  '/',
  '/login',
  '/register',
  '/market-place',
];
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

    const user = dispatch(login(pageProps?.userProfile));

    if (router.pathname.includes('market-place')) {
      dispatch(saveMarketPlacePresets('categories', pageProps?.categories));

      await dispatch(
        getAllCartItems(
          pageProps?.serverCart,
          // @ts-ignore
          user?.id,
          router.query?.campaignId,
          router.query?.campaignAdminId
        )
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    runBeforeLoad();
  }, []);

  useEffect(() => {
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
          eraseCookie('token');

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

QuikInfluenceApp.getInitialProps = async (context: any) => {
  let nav: any;
  let formData: any;
  let formInputs: any;
  let tags: any;
  let categories: CategoryDataType[] = [];
  let serverCart: any = {};
  let userProfile: any;

  // const { campaignId } = ctx.query;

  const route = context.router.route;

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

  try {
    if (route.includes('market-place')) {
      const res = await axiosInstance.get('/users/campaign/product-categories');
      categories = res.data.data;

      const token = getCookie('token', context.ctx.req.headers.cookie);

      serverCart = await getCartItems(
        context.router.query.campaignId,
        context.router.query.campaignAdminId,
        {
          token,
        }
      );
    }
  } catch (err) {
    // console.log(err);
  }

  try {
    if (route.includes('market-place')) {
      const token = getCookie('token', context.ctx.req.headers.cookie);

      const res = await axiosInstance.get(
        route.includes('market-place')
          ? '/auth/profile/user'
          : '/auth/profile/admin',
        {
          headers: {
            token,
          },
        }
      );

      userProfile = res.data.data;
    }
  } catch (err) {
    // console.log(err);
  }

  return {
    pageProps: {
      nav: nav?.data?.data,
      formData: formData?.data.data,
      tags: tags?.data.data,
      formInputs: formInputs?.data.data,
      categories,
      serverCart,
      userProfile,
    },
  };
};

export default wrapper.withRedux(QuikInfluenceApp);
