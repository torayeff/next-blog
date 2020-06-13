import React from "react";

export default function Hero({ quote }) {
  return (
    <section className="hero is-large is-dark is-bold is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{quote.text}</h1>
          <h2 className="subtitle">{quote.author}</h2>
        </div>
      </div>
    </section>
  );
}