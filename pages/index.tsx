import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { Todos } from "../components/Todos";

const Home: NextPage = (tasks) => {
  return (
    <Layout home>
      <Head>
        <title>Task List NextJS</title>
      </Head>
      <section>
        <div className="home">
          <Todos />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
