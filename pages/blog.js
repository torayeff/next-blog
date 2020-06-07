import React from "react";
import Layout from "../components/Layout";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";

export default function Blog({allPostsData}) {
  return (
    <Layout title="Blog by Agajan Torayev">
      <div className="container bottom-space">
        <div className="column is-8 is-offset-2">

          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">
                    Blog posts
                  </p>
                </div>
              </div>

              <div className="content article-body">
                <ul>
                  {allPostsData.map(({id, date, title}) => (
                    <li key={id}>
                      <Link href="/posts/[id]" as={`/posts/${id}`}>
                        <a>{title}</a>
                      </Link>
                      <br/>
                      {id}
                      <br/>
                      {date}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}