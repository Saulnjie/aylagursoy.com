import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from "react"
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <main className='mb-12'>
        <Header />
        <div className='pt-8'>
          <Component {...pageProps} />
        </div>
      </main>
    </Fragment>
  )
}

export default MyApp
