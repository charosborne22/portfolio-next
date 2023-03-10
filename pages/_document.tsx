import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en" className="p-0 m-0">
      <Head />
      <body className="p-0 m-0 flex flex-col">
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
