import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import { AppProps } from "next/app"
import './home-swiper.scss';
import createMirageServer from "../lib/mirage";


if (process.env.USE_MIRAGE_SERVER === 'true') {
  console.log('ATTENTION - Using mirage server')
  createMirageServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}

export default MyApp
