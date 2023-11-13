import Banner from "@/components/Banner";
import ThreadList from "@/components/ThreadList";
import Head from "next/head";
import { useState, useEffect } from "react";
import { getThreads } from "./api/threads";

export default function Home(props) {
  const { result } = props;

  return (
    <>
      <Head>
        <title>beer ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/reddit.ico" />
      </Head>
      <main className="container">
        <Banner />
        <ThreadList />
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const result = await getThreads();

  return {
    props: {
      result,
    },
  };
}
