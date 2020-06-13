import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({children, title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png"/>
      </Head>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}