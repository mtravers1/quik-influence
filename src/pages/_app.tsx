import '../styles/globals.css';
import '../styles/404.css';
import { AppProps } from 'next/app';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from '../styles/theme';
import Fonts from 'utils/Fonts';

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default QuikInfluenceApp;
