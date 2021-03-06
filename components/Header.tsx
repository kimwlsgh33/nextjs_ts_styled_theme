import type { FC } from "react";
import Head from "next/head";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
