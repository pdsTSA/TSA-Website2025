import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Adobo Agogo</title>
            <meta name="description" content="Buy our food now!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <body style={{overflowX: "clip", backgroundColor: "#10607A"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
