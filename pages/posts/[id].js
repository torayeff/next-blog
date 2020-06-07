import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import ContentContainer from "../../components/ContentContainer";
import ContentCard from "../../components/ContentCard";
import Head from "next/head";
import renderMathInElement from "../../lib/auto-render";

export default function Post({postData}) {
  useEffect(() => {
    renderMathInElement(document.getElementById("content"), {
      delimiters: [
        {left: "$.", right: ".$", display: false},
        {left: "$$", right: "$$", display: true}
      ]
    });
  });

  return (
    <Layout title={postData.title}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
              integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
              crossOrigin="anonymous"/>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js"
                integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz"
                crossOrigin="anonymous"/>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js"
                integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI"
                crossOrigin="anonymous"
                onLoad="renderMathInElement(document.body);"/>
      </Head>
      <ContentContainer>
        <ContentCard title={postData.title}>
          <div id="content" dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </ContentCard>
      </ContentContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  };
}