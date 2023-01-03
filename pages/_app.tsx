import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import { useState } from "react";
import Cookies from "../components/cookies";
import GoogleAnalytics from "../components/googleAnalytics";
export default function App({ Component, pageProps }: AppProps) {
  const [gAnalytics, setAnalytics] = useState(false);

  return (
    <>
      {gAnalytics && (
        <>
          <GoogleAnalytics />
        </>
      )}
      <Layout>
        <Component {...pageProps} />
        <Cookies setAnalytics={setAnalytics} />
      </Layout>
    </>
  );
}
