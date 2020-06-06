import React, { useEffect } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import renderMathInElement from "../modules/auto-render";

export default function Home() {
  const input = "$$ a^2 + b^2 = c^2 $$";

  useEffect(() => {
    renderMathInElement(document.getElementById("article"));
  });

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />
        <title>Now++ Article</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/github-markdown.css" />
        <link rel="stylesheet" href="/css/katex.min.css" />
      </Head>

      <article className="markdown-body" id="article">
        <ReactMarkdown source={input} />
      </article>

    </div>
  );
};