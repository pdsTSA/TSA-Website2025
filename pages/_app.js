import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import {Head} from "next/document";


export default function App({ Component, pageProps }) {
  return <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
}
