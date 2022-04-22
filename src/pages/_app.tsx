import { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
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
import { createFormData, createTags } from 'redux/actions/general';
import { useRouter } from 'next/router';

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
        if (err.response.status === 401) {
          localStorage.removeItem('_q_inf');
          router.push(`/login?redirect=${router.asPath}`);
        }
        return Promise.reject(err);
      }
    );
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
    let formData: any;
    let tags: any;

    try {
      nav = await axiosInstance.get(
        `${CONTENT_URL}?resource=${APP_NAME}&page=${NAV_NAME}`
      );

      formData = await axiosInstance.get(`/admin/form-element`);

      tags = await axiosInstance.get('/admin/tag');
    } catch (err) {
      console.log(err);
    }

    return {
      pageProps: {
        nav: nav?.data?.data,
        formData: formData?.data.data,
        tags: tags?.data.data,
      },
    };
  }

  return {};
};

export const getSecretsValues = () => {
  let region = 'us-east-1',
    secretName =
      'arn:aws:secretsmanager:us-east-1:984575983798:secret:quikinfluence-dev-frontend-TFtk1k',
    secret: any,
    decodedBinarySecret: string;

  // Create a Secrets Manager client
  const client = new AWS.SecretsManager({
    region: region,
  });

  // In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
  // See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
  // We rethrow the exception by default.

  client.getSecretValue(
    { SecretId: secretName },
    function (err: { code: string }, data: any) {
      if (err) {
        if (err.code === 'DecryptionFailureException')
          // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === 'InternalServiceErrorException')
          // An error occurred on the server side.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === 'InvalidParameterException')
          // You provided an invalid value for a parameter.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === 'InvalidRequestException')
          // You provided a parameter value that is not valid for the current state of the resource.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === 'ResourceNotFoundException')
          // We can't find the resource that you asked for.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
      } else {
        // Decrypts secret using the associated KMS key.
        // Depending on whether the secret is a string or binary, one of these fields will be populated.
        if ('SecretString' in data) {
          secret = data.SecretString;
        } else {
          let buff = Buffer.from(data.SecretBinary, 'base64');
          decodedBinarySecret = buff.toString('ascii');
        }
      }

      // Your code goes here.
      console.log('err >>>', err);
      console.log('data >>>', data);
      console.log('secret >>>', secret);
      process.env = { ...process.env, ...secret };
    }
  );
};

getSecretsValues();

export default wrapper.withRedux(QuikInfluenceApp);
