import '../styles/globals.css'
import '../styles/404.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider, Divider, extendTheme, Stack, ThemeConfig } from '@chakra-ui/react'
import Header from '../src/components/Header'
import SideBarMenu from '../src/components/SideBarMenu'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'quik'
}

export const theme = extendTheme({ config, colors })

function QuikInfluenceApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Stack>
          <Header />
          <Stack flexDirection="row" mt={10}>
            <SideBarMenu />
            <Divider orientation="vertical" height="100vh" />
            <Box width="100%" px={20} py={10}>
                <Component {...pageProps} />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </ChakraProvider>
  )
}

export default QuikInfluenceApp
