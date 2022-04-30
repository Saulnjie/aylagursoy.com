import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Nav from './components/navigation/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/> 
}

export default MyApp
