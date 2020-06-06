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
      </Head>
      <div className="wrapper">
        <Header/>
        <div className="columns is-centered">
          <div className="column is-8">
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}