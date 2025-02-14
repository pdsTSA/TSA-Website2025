import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import {GoogleOAuthProvider} from "@react-oauth/google";



export default function App({ Component, pageProps }) {
  return <>
      <GoogleOAuthProvider clientId={"438612680317-5i0cdcim14q08de8b1gt2norhgfskjnp.apps.googleusercontent.com"}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </GoogleOAuthProvider>
    </>
}
