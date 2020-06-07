import React from "react";
import Layout from "../../components/Layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Date from "../../components/Date";

export default function Post({postData}) {
  return (
    <Layout title={postData.title}>
      <div className="container bottom-space">
        <div className="column is-8 is-offset-2">
          {postData.title}
          <br/>
          {postData.id}
          <br/>
          <Date dateString={postData.date} />
          <br/>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
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