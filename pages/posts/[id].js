import React from "react";
import Layout from "../../components/Layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import ContentContainer from "../../components/ContentContainer";
import ContentCard from "../../components/ContentCard";
import Head from "next/head";

export default function Post({postData}) {
  return (
    <Layout title={postData.title}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
              integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
              crossOrigin="anonymous" />
      </Head>
      <ContentContainer>
        <ContentCard title={postData.title}>
          <div className="md-katex-content"
               dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
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