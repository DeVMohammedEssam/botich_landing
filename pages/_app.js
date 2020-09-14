/** @format */

import Head from "next/head";

import "styles/style.scss";

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
