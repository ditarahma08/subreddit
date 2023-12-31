import CommentList from "@/components/CommentList";
import Post from "@/components/Post";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getThread, getComment } from "../api/threads";

export default function Home(props) {
  const { result } = props;

  const [comments, setComments] = useState([]);

  async function loadComment(id) {
    const commentResult = await getComment(id);
    setComments(commentResult);
  }

  useEffect(() => {
    loadComment(props.id);
  }, [props.id]);

  return (
    <>
      <Head>
        <title>beer ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/reddit.ico" />
      </Head>
      <main className="container my-4 px-4">
        <Post data={result} />
        <CommentList data={comments.comment} />
      </main>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const result = await getThread(id);
  return {
    props: {
      id,
      result,
    },
  };
}
