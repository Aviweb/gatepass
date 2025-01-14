"use client";
import Head from "next/head";
import "../static/main.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import RulesContainer from "./components/RulesContainer";

export default function Home() {
  return (
    <>
      {/* Use Next.js Head component */}
      <Head>
        <title>Gate Pass Management System</title>
      </Head>

      <Header />

      <RulesContainer />

      <Footer />
    </>
  );
}
