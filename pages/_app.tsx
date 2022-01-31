import '../styles/globals.css';
import '../styles/404.css';
import { AppProps } from 'next/app';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from '../styles/theme';

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default QuikInfluenceApp;
