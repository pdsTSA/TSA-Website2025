import Head from "next/head";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Adobo Agogo</title>
      <meta name="description" content="Buy our food now!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}
