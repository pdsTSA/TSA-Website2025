import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {CookiesProvider} from "react-cookie";



export default function App({ Component, pageProps }) {
  return <>
      <CookiesProvider defaultSetOptions={{path: "/"}}>
          <GoogleOAuthProvider clientId={"438612680317-5i0cdcim14q08de8b1gt2norhgfskjnp.apps.googleusercontent.com"}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </GoogleOAuthProvider>
      </CookiesProvider>
    </>
}
