import React, { useEffect } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import renderMathInElement from "../modules/auto-render";
import Layout from "../components/Layout";
import path from "path";
import fs from "fs";
import Article from "../components/Article";

function Post({ post }) {
  useEffect(() => {
    renderMathInElement(document.getElementById("article"), {
      delimiters: [
        {left: "$.", right: ".$", display: false},
        {left: "$$", right: "$$", display: true}
      ]
    });
  });

  return (
    <Layout title="Post">
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/github-markdown.css" />
        <link rel="stylesheet" href="/css/katex.min.css" />
      </Head>
      <Article>
        <div id="article">
          <ReactMarkdown source={post} />
        </div>
      </Article>
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