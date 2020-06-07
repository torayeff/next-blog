import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import path from "path";
import fs from "fs";
import Article from "../components/Article";

function Post({ post }) {
  return (
    <Layout title="Post">
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/github-markdown.css" />
        <link rel="stylesheet" href="/css/katex.min.css" />
      </Head>
      <Article article={post}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "posts", "first.md");
  const post = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      post,
    },
  }
}

export default Post;