import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import quotes from "../data/quotes.json";

export default function Index() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  return (
    <>
      <Layout title="Agajan Torayev">
        <Hero quote={quote}/>
      </Layout>
    </>
  );
}