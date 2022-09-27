import React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="images/favicon.ico" />
      <title>SHOARK SUGGESTS</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;