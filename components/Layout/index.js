import React from "react";
import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  const titleText = "Radical World" + " - " + title;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </>
  );
}
