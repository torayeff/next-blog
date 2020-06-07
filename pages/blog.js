import React from "react";
import Layout from "../components/Layout";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import blogStyles from "../styles/blog.module.css";
import Date from "../components/Date";
import ContentCard from "../components/ContentCard";
import ContentContainer from "../components/ContentContainer";

export default function Blog({allPostsData}) {
  return (
    <Layout title="Blog by Agajan Torayev">
      <ContentContainer>
          <ContentCard title="Blog">
            <ul className={blogStyles.list}>
              {allPostsData.map(({id, date, title}) => (
                <li className={blogStyles.listItem} key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={blogStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </ContentCard>
      </ContentContainer>
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