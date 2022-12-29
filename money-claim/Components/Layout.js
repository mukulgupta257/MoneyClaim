import React, { useState } from "react";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  const [sta, setSta] = useState();
  return (
    <>
      <Head>
        <title>Money Claim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="root">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
