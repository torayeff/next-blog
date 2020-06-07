import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import quotes from "../data/quotes.json";

export default function Index() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(Math.floor(Math.random() * (quotes.length - 1) + 1));
  })

  const quote = quotes[idx];
  return (
    <>
      <Layout title="Agajan Torayev">
        <Hero quote={quote}/>
      </Layout>
    </>
  );
}