import React, { useEffect } from "react";
import renderMathInElement from "../modules/auto-render";
import ReactMarkdown from "react-markdown";

export default function Article({ article }) {
  useEffect(() => {
    renderMathInElement(document.getElementById("article"), {
      delimiters: [
        {left: "$.", right: ".$", display: false},
        {left: "$$", right: "$$", display: true}
      ]
    });
  });

  return (
    <div className="container">
      <section className="articles">
        <div className="column is-8 is-offset-2">
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">Now++ incremental progress</p>
                  <div className="tags has-addons level-item">
                    <span className="tag is-rounded is-info">@torayeff</span>
                    <span className="tag is-rounded">May 10, 2018</span>
                  </div>
                </div>
              </div>
              <div className="content article-body" id="article">
                  <ReactMarkdown source={article} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}