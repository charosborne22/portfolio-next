import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useState } from "react";
import Cookies from "../components/cookies";

export default function App({ Component, pageProps }: AppProps) {
  const [gAnalytics, setAnalytics] = useState(false);

  return (
    <>
      {gAnalytics && (
        <>
          <Script
            id="ga-connect"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script id="ga" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
            `}
          </Script>
        </>
      )}
      <Layout>
        <Component {...pageProps} />
        <Cookies gAnalytics={gAnalytics} setAnalytics={setAnalytics} />
      </Layout>
    </>
  );
}
