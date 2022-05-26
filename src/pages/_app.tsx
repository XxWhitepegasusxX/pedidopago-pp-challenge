import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Sidebar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp