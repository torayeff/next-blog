import React from "react";
import Link from "next/link";

export default function BlogLink({post}) {
  return (
    <p className="is-size-5">
      <span className="is-size-6">{post.date}</span>
      <br/>
      <Link href={"/posts/" + post.slug}>
        <a>{post.title}</a>
      </Link>
    </p>
  );
}