import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import { AppProps } from "next/app"

import './home-swiper.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}

export default MyApp
